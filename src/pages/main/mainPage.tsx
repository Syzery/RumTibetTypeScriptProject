import { people } from '../../utils/constants';
import { country } from '../../utils/constants';
import { RumtibetLogo } from './img/RumTibetLogo';
import { CalendarLogo } from './img/CalendarLogo';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {MiniLabel} from "./helper/miniLabel";
import {OurTour} from './helper/ourTour';
import {ReviewsOffer} from "./helper/reviewsOffer"
import imageMemoryOne from "./img/imageMemoriesOne.png"
import imageMemoryTwo from "./img/imageMemoriesTwo.png"
import imageMemoryThree from "./img/imageMemoriesThree.png"
import imageMemoryFour from "./img/imageMemoriesFour.png"
import imageMemoryFive from "./img/imageMemoriesFive.png"
import imageMemorySix from "./img/imageMemoriesSix.png"

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
            <div className={styles.bestOfferPage}>
                <div className={styles.bestOfferGroup}>
                    <div className={styles.textBestOfferConatiner}>
                        <div className={styles.headerBestOffer}>
                            <h1 className={styles.headOurTour}>наше предложение</h1>
                            <h2 className={styles.subHeadsBestForU}>Лучшие программы для тебя</h2>
                        </div>
                        <p className={styles.historeOurTourText}>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.</p>
                        <div className={styles.CardContainer}>
                            <MiniLabel ide={1} className0={styles.miniLabelConttainer} className={styles.miniLabelPictures} className1={styles.miniLabelTextGroup} className2={styles.miniLabelTitle} className3={styles.miniLabelDescription}/>
                            <MiniLabel ide={2} className0={styles.miniLabelConttainer} className={styles.miniLabelPictures} className1={styles.miniLabelTextGroup} className2={styles.miniLabelTitle} className3={styles.miniLabelDescription}/>
                            <MiniLabel ide={3} className0={styles.miniLabelConttainer} className={styles.miniLabelPictures} className1={styles.miniLabelTextGroup} className2={styles.miniLabelTitle} className3={styles.miniLabelDescription}/>
                        </div>
                        <button className={styles.costProgrammButton}>Стоимость программ</button>
                    </div>
                <div className={styles.imgGroup}>
                    <div className={styles.bestOfferPicturesOne}></div>
                    <div className={styles.bestOfferPicturesTwo}></div>
                    <div className={styles.bestOfferPicturesThre}></div>
                    <div className={styles.bestOfferPicturesFour}></div>
                </div>
                </div>
            </div>
            <div className={styles.popularDestinationPage}>
                <div className={styles.headerShareVersionConatiner}>
                    <h1 className={styles.titleVersionTourist}>по версии отдыхающих</h1>
                    <h2 className={styles.subTitlePopulatTour}>Популярные направления</h2>
                </div>
                <div className={styles.picturiesConatiner}>
                    <OurTour ide={1} className0={styles.popularTourContainerOne} className={styles.starContainer} className1={styles.starImg} className2={styles.starRaiting} className3={styles.costConatiner} className4={styles.discriptionContainer} className5={styles.nameTourText} className6={styles.explanationText} className7={styles.priceContainer}/>
                    <OurTour ide={2} className0={styles.popularTourContainerTwo} className={styles.starContainer} className1={styles.starImg} className2={styles.starRaiting} className3={styles.costConatiner} className4={styles.discriptionContainer} className5={styles.nameTourText} className6={styles.explanationText} className7={styles.priceContainer}/>
                    <OurTour ide={3} className0={styles.popularTourContainerThree} className={styles.starContainer} className1={styles.starImg} className2={styles.starRaiting} className3={styles.costConatiner} className4={styles.discriptionContainer} className5={styles.nameTourText} className6={styles.explanationText} className7={styles.priceContainer}/>
                </div>
                <button className={styles.rateTourButton}>Рейтинг направлений</button>
            </div>
            <div className={styles.shareImpressionPage}>
                <div className={styles.headerShareBlogConatiner}>
                    <h1 className={styles.titleShareImpression}>делимся впечатлениями</h1>
                    <h2 className={styles.subTitleBlog}>Блог о путешествиях</h2>
                </div>
                <div className={styles.imgAdviseContainer}>
                    <ReviewsOffer ide={1} className={styles.blogPicturiesOne} className0={styles.adviseConatiner} className1={styles.textAdviseContainer} className2={styles.titleAdvise} className3={styles.descriptionAdvise} className4={styles.adviseButtonContainer} className5={styles.dateAdvise} className6={styles.buttonAdvise}/>
                    <ReviewsOffer ide={2} className={styles.blogPicturiesTwo} className0={styles.adviseConatiner} className1={styles.textAdviseContainer} className2={styles.titleAdvise} className3={styles.descriptionAdvise} className4={styles.adviseButtonContainer} className5={styles.dateAdvise} className6={styles.buttonAdvise}/>
                    <ReviewsOffer ide={3} className={styles.blogPicturiesThree} className0={styles.adviseConatiner} className1={styles.textAdviseContainer} className2={styles.titleAdvise} className3={styles.descriptionAdvise} className4={styles.adviseButtonContainer} className5={styles.dateAdvise} className6={styles.buttonAdvise}/>
                    <ReviewsOffer ide={4} className={styles.blogPicturiesFour} className0={styles.adviseConatiner} className1={styles.textAdviseContainer} className2={styles.titleAdvise} className3={styles.descriptionAdvise} className4={styles.adviseButtonContainer} className5={styles.dateAdvise} className6={styles.buttonAdvise}/>
                </div>
                <button className={styles.otherMaterialButton}>Другие материалы</button>
            </div>
            <div className={styles.photoPage}>
                <div className={styles.photoShare}>
                    <h1 className={styles.titlePhotoReport}>фото-отчет</h1>
                    <h2 className={styles.subTitleShareImpression}>Делимся впечатлениями</h2>
                </div>
                <div className={styles.photoContainer}>
                    <div className={styles.imageMemoriesContainer}>
                        <img src={imageMemoryOne} className={styles.photoReport1}/>
                        <img src={imageMemoryTwo} className={styles.photoReport2}/>
                        <img src={imageMemoryThree} className={styles.photoReport3}/>
                    </div>
                    <div className={styles.imageMemoriesContainer}>
                        <img src={imageMemoryFour} className={styles.photoReport4}/>
                        <img src={imageMemoryFive} className={styles.photoReport5}/>
                        <img src={imageMemorySix} className={styles.photoReport6}/>
                    </div>
                    
                </div>
                <button className={styles.ourPinterestButtom}>Наш pinterest</button>
            </div>
        </div>
    );
};
