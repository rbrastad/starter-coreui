let AssetImage = React.createClass({
    render: function() {
        const imgProps = Object.assign({}, this.props);
        let imageSrc = imgProps.imageSrc;

        delete imgProps.imageSrc;

        return <img src={ window.enonic.assetUrl + imageSrc} {...imgProps} />;
    }
});

export default AssetImage;
