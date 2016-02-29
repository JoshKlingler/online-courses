// $(document).ready(function(){

// 	var i=1;
// 	$("#add_row").click(function(){
// 		$('#drive'+i).html("<td><input type='checkbox'></td><td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='driver"+i+"' type='file'  class='form-control input-md'></td><td><input  name='expected"+i+"' type='text' placeholder='Expected files'  class='form-control input-md'></td>");
// 		$('#drivers').append('<tr id="drive'+(i+1)+'"></tr>');
// 		i++;
// 	});
//      $("#delete_row").click(function(){
//     	 if(i>1){
// 		 $("#drive"+(i-1)).html('');
// 		 i--;
// 		 }
// 	 });


// });

(function ($) {
	var $form,
		$testDriverTpl,
		$expFileTpl,
		$testDriverContainer,
		$addDriverButton,
		options,
		methods,
		numDrivers;

	options = {
		driverContainer: 'drivers',
		addDriverButton: 'add-test-driver',
	};

	methods = {
		initializeForm: function () {
			numDrivers = 0;
			$testDriverContainer = $(options.driverContainer);
			$addDriverButton = $(options.addDriverButton);

			methods.createTemplates();
			methods.createListeners();

			methods.addDriver();
		},
		createTemplates: function () {
			var $name, $file, $expectedFiles;

			$expFileTpl	   = $('<div></div>');
			$testDriverTpl = $('<div style="border-style:solid"></div>');
			$name          = $('<div></div>');
			$file          = $('<div></div>');
			$expectedFiles = $('<div></div>');

			$('<label>Name</label>').appendTo($name);
			$('<input type="text" class="form-control"/>').appendTo($name);

			$('<label>File</label>').appendTo($file);
			$('<input type="file">').appendTo($file);

			$('<label>Expected Output Files</label>').appendTo($expectedFiles);

			// Expected File Template
			$('<input type="text" class="form-control"/>').appendTo($expFileTpl);
			$($expFileTpl).clone().appendTo($expectedFiles);

			$('<button id="add-exp-file-btn" type="button">Add</button>').appendTo($expectedFiles);

			$name.appendTo($testDriverTpl);
			$file.appendTo($testDriverTpl);
			$expectedFiles.appendTo($testDriverTpl);
		},

		createListeners: function () {
			$addDriverButton.on('click', function () {
				methods.addDriver();
			});
			$(document.body).on('click', '#add-exp-file-btn', function(event){
				var target = $(event.target);
				methods.addExpectedFile(target);
			});
		},
		addDriver: function () {
			var $driver;

			$driver = $testDriverTpl.clone();
			$driver.attr("id", "driver" + numDrivers);
			$driver.appendTo($testDriverContainer);

			numDrivers++;
		},
		addExpectedFile: function(target) {
			var $expFile = $expFileTpl.clone();

			target.before($expFile);

		}		
	};

	$.fn.instructorForm = function (opts) {
		$form   = $(this);
		options = $.extend(options, opts);

		methods.initializeForm();
	}
})(jQuery);
