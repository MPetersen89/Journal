// User Interface Logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#entry").submit(function(event) {
    event.preventDefault();
    const title = $("#title").val();
    const body = $("#body").val();
    $("#output").text(title);
    $("#output").text(body);
  });
});