import { HolidayFinder } from './holidayfinder.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#holidayFinder').click(function(event) {
    event.preventDefault();
    const date = $('#inputDate').val();
    $('#inputDate').val("");

    let holidayFinder = new HolidayFinder();
    let promise = holidayFinder.getHoliday(date);

    promise.then(function(response) {
      const body = JSON.parse(response);
        for (var i = 0; i < body.response.holidays.length; i++) {
          // console.log("made it to for loop");
          if (body.response.holidays[i].date.iso === date) {
            // console.log("made it to if");
            // console.log(body.response.holidays[i].name);
            $('#nameOutput').text(body.response.holidays[i].name);
            $('#descOutput').text(body.response.holidays[i].description);

          } 
      }
    });
  });
});
