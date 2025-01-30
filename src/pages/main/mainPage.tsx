import { people } from '../../utils/constants';
import { country } from '../../utils/constants';
import { RumtibetLogo } from './img/RumTibetLogo';
import { CalendarLogo } from './img/CalendarLogo';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatDate } from 'react-calendar/dist/cjs/shared/dateFormatter';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export const MainPage = () => {
    const [newDate, onChange] = useState<Value>(new Date());
    const [calendarVision, setCalendarVision] = useState<number>(0);
    const [dateView, setDateView] = useState<string>("Дата похода");

    const handleChangeCalendarState = () => {
            setCalendarVision(1);
    }

    useEffect(() => {
        setCalendarVision(0)
        setDateView(String(newDate))
      }, [newDate]);
    
    
    console.log(String(newDate));
    return (
        <div>
            <div className={styles.headerContainer}>
                <div className={styles.header}>
                    <RumtibetLogo className={styles.headerLogo}/>
                    <div className={styles.headerButtonsContainer}>
                        <div className={styles.scrollButtonsContainer}>
                            <button className={styles.scrollButton}>Главная</button>
                            <button className={styles.scrollButton}>Про гида</button>
                            <button className={styles.scrollButton}>Программа тура</button>
                            <button className={styles.scrollButton}>Стоимость</button>
                            <button className={styles.scrollButton}>Блог</button>
                            <button className={styles.scrollButton}>Контакты</button>
                        </div>
                        <button className={styles.consultButton}>Консультация</button>
                    </div>  
                </div>
                <div className={styles.searchProgramContainer}>
                        <h1 className={styles.searchProgramDescription}>Насладись прогулкой в горах с командой единомышленников</h1>
                        <div className={styles.searchButtonsContainer}>
                            <div className={styles.searchButtonContainer}>
                            <Select 
                                    className={styles.selectorContry}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                          ...baseStyles,
                                          backgroundColor: 'none',
                                          height: '52px',
                                          width: '270px',
                                          borderRadius: '8px',
                                          border: '1px solid #E1E3E4',
                                        }),
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            backgroundColor: 'gray',
                                        }),
                                        placeholder:(baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            fontFamily: '"Nunito Sans", serif'
                                        }),
                                    }}
                                     options={country} 
                                     placeholder={"Локации для тура"} 
                                     
                                 />
                                <p className={styles.searchButtonDescription}>выберите из списка</p>
                            </div>
                            <div className={styles.searchButtonContainer}>
                                <button className={calendarVision === 0 ? styles.calendarVisionButton : styles.hideCalendarVisionButton} onClick={() => handleChangeCalendarState()}>
                                    <p className={styles.calendarVisionText}>{dateView}</p>
                                    <CalendarLogo className={styles.CalendarLogo}/>
                                </button>
                                <div className={calendarVision === 0 ? styles.hideClaendar : styles.calendar}>
                                    <Calendar onChange={onChange} value={newDate} selectRange={true} />
                                </div>
                                
                                <p className={styles.searchButtonDescription}>укажите диапазон</p>
                            </div>
                            <div className={styles.searchButtonContainer}>
                                <Select 
                                    className={styles.selectorContry}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                          ...baseStyles,
                                          backgroundColor: 'none',
                                          height: '52px',
                                          width: '270px',
                                          borderRadius: '8px',
                                          border: '1px solid #E1E3E4',
                                        }),
                                        option: (baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            backgroundColor: 'gray',
                                        }),
                                        placeholder:(baseStyles, state) => ({
                                            ...baseStyles,
                                            color: '#FDFDFD',
                                            fontFamily: '"Nunito Sans", serif'
                                        }),
                                    }}
                                     options={people} 
                                     placeholder={"Участники"} 
                                 />
                                <p className={styles.searchButtonDescription}>минимум 4 человека</p>
                            </div>
                            <button className={styles.searchProgrammButton}>Найти программу</button>
                        </div>
                    </div>
            </div>
            <div className={styles.aboutTripPage}>
                <div className={styles.aboutTripInforamtion}>
                    <div className={styles.imgContainer}>
                        <div className={styles.aboutPictureOne}></div>
                        <div className={styles.aboutPictureTwo}></div>
                    </div>
                    <div className={styles.aboutContainer}>
                        <div className={styles.aboutTitleText}>
                            <h1 className={styles.headTitle}>о нашем походе</h1>
                            <h2 className={styles.subHead}>Исследуйте все горные массивы мира вместе с нами</h2> 
                        </div>
                        <p className={styles.baseText}>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
                        <button className={styles.programmTourButton}>Программа тура</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
