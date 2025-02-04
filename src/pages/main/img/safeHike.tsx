import React from "react";

type Props = {
    className: string;
}

export const SafeHike  = ({className} : Props) => (
    <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="50" rx="4" fill="#E3E6EE"/>
        <path d="M38.4036 14.0611C38.3342 13.7483 38.2162 13.4484 38.0537 13.1723C38.0537 13.1723 34.151 7 23.9992 7C13.8505 7 9.94482 13.1723 9.94482 13.1723C9.80108 13.3988 9.6438 13.7984 9.59413 14.0611C9.59413 14.0611 8.83934 18.0638 10.0886 23.8012C11.2392 29.0758 14.4194 36.6365 23.0541 42.6997C23.3309 42.8948 23.6613 42.9996 24 42.9996C24.3387 42.9996 24.6691 42.8948 24.9459 42.6997C33.5776 36.6358 36.7593 29.0758 37.9092 23.8012C39.1622 18.0638 38.4036 14.0611 38.4036 14.0611ZM34.5822 23.0758C34.5499 23.227 34.51 23.385 34.4723 23.5401H23.9992V39.1741C17.2625 34.0613 14.579 27.9793 13.5254 23.5401H23.9992V10.4052C31.2274 10.4052 34.446 14.0445 35.0842 14.8738C35.1895 15.6384 35.5176 18.79 34.5822 23.0758Z" fill="#6276AA"/>
    </svg>

);