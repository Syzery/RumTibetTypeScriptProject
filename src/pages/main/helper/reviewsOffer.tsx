import {reviewsOfferDate} from '../../../utils/constants';


type Props ={
    ide: number;
    className: string;
    className0: string;
    className1: string;
    className2: string;
    className3: string;
    className4: string;
    className5: string;
    className6: string;
}

export const ReviewsOffer = ({ide, className0, className, className1, className2, className3, className4, className5, className6} : Props) => {
    return (
        <>
            {reviewsOfferDate.map(item => item.id === ide &&
                <div className={className0}>
                    <div className={className}></div>
                    <div className={className1}>
                        <p className={className2}>{item.title}</p>
                        <p className={className3}>{item.description}</p>
                        <div className={className4}>
                            <p className={className5}>{item.date}</p>
                            <button className={className6}>{item.button}</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}