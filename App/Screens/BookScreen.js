import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  getBook,
  addToBookmark,
  removeFromBookmark,
} from '../Store/actions/BookActions';

import BookItem from '../Components/BookItem';

const BookScreen = props => {
  const [isLoading, setIsLoading] = useState(false);

  const {books, bookmarks} = useSelector(state => state.booksReducer);
  const dispatch = useDispatch();

  const handleAddBookMark = book => {
    dispatch(addToBookmark(book));
  };

  const handleRemoveBookmark = book => {
    dispatch(removeFromBookmark(book));
  };

  const ifExists = book => {
    if (bookmarks.filter(item => item.id === book.id).length > 0) {
      return true;
    }
    return false;
  };

  const fetchBooks = () => {
    setIsLoading(true);
    dispatch(getBook());
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const _renderItem = ({item}) => {
    return (
      <BookItem
        bookImage={item.image_url}
        title={item.title}
        numOfPage={item.num_pages}
        rating={item.rating}
        onPress={() =>
          ifExists(item) ? handleRemoveBookmark(item) : handleAddBookMark(item)
        }
        iconColor={ifExists(item) ? 'white' : '#64676D'}
        icon={ifExists(item) ? 'bookmark-outline' : 'bookmark'}
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      {isLoading ? (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : null}

      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{fontSize: 22, color: 'white'}}>Best Sellers</Text>
        <View style={{flex: 1, marginTop: 5}}>
          <FlatList
            data={books}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={_renderItem}
            overScrollMode="never"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1E1B26',
  },
});

export default BookScreen;
