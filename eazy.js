$(document).ready(function() {
    var totalQuestions = $('.question').length;
    var filledInputs = 0;
  
    $('.question input[type="text"]').on('input', function() {
      if ($(this).val().length >= 3) {
        updateProgress();
      }
    });
  
    $('.question select').on('change', function() {
      updateProgress();
    });
  
    $('.question input[type="radio"]').on('change', function() {
      updateProgress();
    });
  
    function updateProgress() {
      filledInputs = 0;
      $('.question input[type="text"]').each(function() {
        if ($(this).val().length >= 3) {
          filledInputs++;
        }
      });
      $('.question select').each(function() {
        if ($(this).val() !== '') {
          filledInputs++;
        }
      });
      $('.question input[type="radio"]').each(function() {
        if ($(this).is(':checked')) {
          filledInputs++;
        }
      });
      var progress = (filledInputs / (totalQuestions * 3)) * 100; // assuming each question contributes 3 to the total progress
      $('#progress-bar').css('width', progress + '%');
    }
  });
  