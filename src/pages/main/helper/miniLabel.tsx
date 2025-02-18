import {miniLabelData} from '../../../utils/constants';

type Props ={
    ide: number;
    className: string;
    className0: string;
    className1: string;
    className2: string;
    className3: string;
}

export const MiniLabel = ({ide, className0, className, className1, className2, className3} : Props) => {
    return (
        <>
            {miniLabelData.map(item => item.id === ide &&
                <div className={className0}>
                    <item.img className={className} />
                    <div className={className1}>
                        <p className={className2}>{item.title}</p>
                        <p className={className3}>{item.description}</p>
                    </div>
                </div>
                )}
        </>
    );
}