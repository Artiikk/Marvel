import { Helmet } from 'react-helmet';
import './SingleCharPage.scss';

const SingleCharPage = ({ data }) => {

    const { name, description, thumbnail } = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta name="description" content={`${name} characters book`} />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        </div>
    )
}

export default SingleCharPage;