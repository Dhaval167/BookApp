import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeFromBookmark} from '../Store/actions/BookActions';
import BookItem from '../Components/BookItem';

const BookMarkScreen = props => {
  const {bookmarks} = useSelector(state => state.booksReducer);
  const dispatch = useDispatch();

  const handleRemoveBookmark = book => {
    dispatch(removeFromBookmark(book));
  };

  const renderItem = ({item}) => {
    return (
      <BookItem
        bookImage={item.image_url}
        title={item.title}
        numOfPage={item.num_pages}
        rating={item.rating}
        onPress={() => handleRemoveBookmark(item)}
        iconColor="#64676D"
        icon="bookmark-remove"
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1E1B26'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Bookmarks</Text>
        <View style={{flex: 1, marginTop: 8}}>
          {bookmarks.length === 0 ? (
            <Text style={{color: '#64676D', fontSize: 18}}>
              Add a book to bookmark list.
            </Text>
          ) : (
            <FlatList
              data={bookmarks}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BookMarkScreen;
