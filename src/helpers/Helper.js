import dateFormat from 'dateformat';

export const getDateFormat =(date)=>{
    return dateFormat(date.toLocaleDateString(), 'dd-mm-yyyy');
}