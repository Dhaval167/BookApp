import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native-elements';

const BookItem = props => {
  return (
    <View style={{marginVertical: 12}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        {/* Book Cover */}
        <Image
          source={{uri: props.bookImage}}
          resizeMode="cover"
          style={{width: 100, height: 150, borderRadius: 10}}
          PlaceholderContent={<ActivityIndicator size="small" />}
        />
        {/* Book Metadata */}
        <View style={{flex: 1, marginLeft: 12}}>
          {/* Book Title */}
          <View>
            <Text
              style={{fontSize: 22, paddingRight: 16, color: 'white'}}
              numberOfLines={2}
              ellipsizeMode="tail">
              {props.title}
            </Text>
          </View>
          {/* Meta info */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <Icon color="#64676D" name="book-open-page-variant" size={20} />
            <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
              {props.numOfPage}
            </Text>
            <Icon
              color="#64676D"
              name="star"
              size={20}
              style={{paddingLeft: 16}}
            />
            <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
              {props.rating}
            </Text>
          </View>
          {/* Buttons */}
          <View style={{marginTop: 14}}>
            <TouchableOpacity
              onPress={props.onPress}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                padding: 2,
                backgroundColor: '#2D3038',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
              }}>
              <Icon color={props.iconColor} size={24} name={props.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookItem;
