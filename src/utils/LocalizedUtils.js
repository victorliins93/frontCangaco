import DateFnsUtils from '@date-io/date-fns';

var moment = require('moment');
require('moment/locale/pt-br');

export class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
        return moment(date).format('ll');
    }
}