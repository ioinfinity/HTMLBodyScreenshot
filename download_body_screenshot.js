function downloadBodyScreenshot(filename, image_type) {
			html2canvas($(document.body), {
				onrendered: function(canvas) {										
					var img = canvas.toDataURL("image/"+image_type);
					
					function saveAs(uri, filename) {
					    var link = document.createElement('a');
					    if (typeof link.download === 'string') {
					        document.body.appendChild(link); 
					        link.download = filename;
					        link.href = uri;
					        link.click();
					        document.body.removeChild(link); 
					    } else {
					        location.replace(uri);
					    }
					}
					
					var uri = img.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
					saveAs(uri, filename+'.'+image_type);	
				}
			});	
		}