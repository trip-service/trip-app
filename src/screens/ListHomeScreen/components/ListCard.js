import format from 'date-fns/format';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  Caption,
  Subheading,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';

import Tag from '~/components/Tag';
import { toCurrencyFormat, toNumberFormat } from '~/utils/format';

function DateDisplay({ date, type }) {
  if (!date) return null;

  if (type === 'completed') {
    return (
      <Caption style={styles.completedTitle}>
        {format(date, 'LLL d, yyyy')}
      </Caption>
    );
  }

  return (
    <View style={styles.progressDate}>
      <Text style={styles.progressMonth}>{format(date, 'LLL')}</Text>
      <Subheading style={styles.progressDay}>{format(date, 'd')}</Subheading>
    </View>
  );
}

function DescriptionDisplay({ description, type }) {
  if (!isEmpty(description))
    return <Text numberOfLines={3}>{description}</Text>;

  if (type === 'draft')
    return <Text style={styles.pendingText}>Pending...</Text>;

  return null;
}

function CoverDisplay({ cover, style }) {
  if (!cover) return null;

  return <Image style={[styles.cover, style]} source={{ uri: cover }} />;
}

function TagsDisplay({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <View style={styles.tags}>
      {tags.map(tag => (
        <Tag key={tag} style={styles.tag} text={tag} />
      ))}
    </View>
  );
}

const getPriceText = price => {
  if (!price) return 'Free';

  return toCurrencyFormat(price);
};

const getSubscribersText = subscribers => {
  if (!subscribers) return '';

  if (subscribers > 9999) return ` / 9,999+`;

  return ` / ${toNumberFormat(subscribers)}`;
};

function VariantsDisplay({ variants }) {
  const theme = useTheme();

  if (!variants || variants.length === 0) return null;

  return (
    <View style={styles.variants}>
      {variants.map(variant => (
        <TouchableOpacity
          key={variant.id}
          style={[
            styles.variant,
            { borderColor: theme.colors.placeholder },
            !variant.isActive && styles.variantClosed,
          ]}
        >
          <Text style={styles.flexable}>{variant.title}</Text>

          <View>
            <Text>
              {getPriceText(variant.price)}
              {getSubscribersText(variant.subscribers)}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function ListCard({ item }) {
  const isInProgress = item.type !== 'completed';

  return (
    <TouchableOpacity>
      <Surface style={styles.root}>
        {item.type === 'completed' && (
          <CoverDisplay style={styles.completedCover} cover={item.cover} />
        )}

        <View style={[styles.flexable, isInProgress && styles.inProgress]}>
          <DateDisplay date={item.startDate} type={item.type} />
          <View style={[isInProgress && styles.flexable]}>
            <Subheading style={styles.title}>{item.title}</Subheading>
            <View style={styles.content}>
              <View style={styles.flexable}>
                <DescriptionDisplay
                  description={item.description}
                  type={item.type}
                />
                <TagsDisplay tags={item.tags} />
              </View>
              {item.type !== 'completed' && <CoverDisplay cover={item.cover} />}
            </View>

            <VariantsDisplay variants={item.variants} />
          </View>
        </View>
      </Surface>
    </TouchableOpacity>
  );
}

const typeProp = PropTypes.oneOf([
  'inProgress',
  'pending',
  'draft',
  'completed',
]);

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date),
  type: typeProp,
};

DescriptionDisplay.propTypes = {
  description: PropTypes.string,
  type: typeProp,
};

CoverDisplay.propTypes = {
  cover: PropTypes.string,
  style: PropTypes.shape(ViewStyle),
};

TagsDisplay.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

VariantsDisplay.propTypes = {
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      subscribers: PropTypes.number,
      isActive: PropTypes.bool,
    })
  ),
};

ListCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: DescriptionDisplay.propTypes.description,
    startDate: DateDisplay.propTypes.date,
    endDate: DateDisplay.propTypes.date,
    type: typeProp,
    cover: CoverDisplay.propTypes.cover,
    tags: TagsDisplay.propTypes.tags,
    variants: VariantsDisplay.propTypes.variants,
  }).isRequired,
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    elevation: 0,
    flexDirection: 'row',
  },
  flexable: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
  },
  cover: {
    width: 60,
    height: 72,
    borderRadius: 4,
    resizeMode: 'cover',
  },
  tags: {
    marginTop: 4,
    marginHorizontal: -4,
    marginBottom: -4,
    flexDirection: 'row',
  },
  tag: {
    margin: 4,
  },
  variants: {
    marginTop: 10,
    marginBottom: -2,
  },
  variant: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 2,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
  },
  variantClosed: {
    opacity: 0.3,
  },

  // In progress
  inProgress: {
    flexDirection: 'row',
  },
  progressDate: {
    marginRight: 16,
    paddingTop: 4,
    width: 48,
    alignItems: 'center',
  },
  progressMonth: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  progressDay: {
    marginTop: 4,
    fontSize: 36,
    lineHeight: 36,
    fontWeight: '500',
  },

  // Draft
  pendingText: {
    fontStyle: 'italic',
    opacity: 0.5,
  },

  // Completed
  completedTitle: {
    marginTop: 0,
    lineHeight: 16,
  },
  completedCover: {
    marginRight: 18,
  },
});
