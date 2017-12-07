import React from 'react';
import Loader from './Loader';

const COLUMNS = 4;

class ListingsContainer extends React.Component {

    handleAddToCart = e => {
      const item = e.target.dataset.item;
      this.props.addToCart(item);
    };

    renderListing = (listing, i) => {
        return (
            <div key={`listItem-${i}`} className="list-item">
                <div className="list-item-imageContainer">
                    <img className="list-item--image" src={listing.image} alt=""/>
                    <div
                        className="list-item--buyNow"
                        data-item={i}
                        onClick={this.handleAddToCart}
                    >
                        Buy Now
                    </div>
                </div>
                <div className="list-item--category">{listing.category}</div>
                <div className="list-item--name">{listing.name}</div>
                <div className="list-item--price">{listing.rate}</div>
                <div className="list-item--heart"></div>
                {listing.isNew && <div className="list-item--new">New</div>}
            </div>
        )
    };

    renderRow = rowId => {
        const cols = [];
        for(let j = 0; j < COLUMNS; j++) {
            cols.push(this.renderListing(this.props.listings[rowId*4+j], rowId*4+j));
        }
        return (
            <div key={`row-${rowId}`} className="list-items">
                {cols}
            </div>
        )
    };

    renderListings = () => {
        const numOfListings = this.props.listings.length,
            numOfRows = numOfListings/4,
            rows = [];
        for(let i = 0; i < numOfRows; i++) {
            rows.push(this.renderRow(i))
        }
        return rows;
    };

    render() {
        if(this.props.isFetching) {
            return <Loader />;
        }
        return (
            <div className="listings">
                {this.renderListings()}
            </div>
        );
    }
}

export default ListingsContainer;