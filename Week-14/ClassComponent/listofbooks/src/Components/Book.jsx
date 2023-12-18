import React, { PureComponent } from 'react'
import BookDetails from './BookDetails'

export class Book extends PureComponent {
  render() {
    const {book} = this.props;
    return (
      <div>
        <hr/>
        <BookDetails book={book}/>
      </div>
    )
  }
}

export default Book