import {ourTourData} from '../../../utils/constants';

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
    className7: string;
}

export const OurTour = ({ide, className0, className, className1, className2, className3, className4, className5, className6, className7} : Props) => {
    return (
        <>
            {ourTourData.map(item => item.id === ide &&
                <div className={className0}>
                    {/* star */}
                    <div className={className}>
                        <div className={className1}></div>
                        <div className={className2}>{item.star}</div>
                    </div>
                    {/* desciption */}
                    <div className={className3}>
                        <div className={className4}>
                            <p className={className5}>{item.title}</p>
                            <p className={className6}>{item.description}</p>
                        </div>
                        <div className={className7}>{item.price}</div>
                    </div>
                </div>
                )}
        </>
    );
}