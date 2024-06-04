var span = $("span.coords-latlon-info" )

console.log(span)

// Clean all newlines and spaces
// Sample: Latitude(N):22.33102,Longitude(E):114.16172
var cleaned_coords = span.text().replace(/(\r\n|\n|\r|\s)/gm, "")

// Use regex to match the value of lat long
var regex = /[^:]*:(\d+\.\d+)[^:]*:(\d+.\d*)/gm;

var m = regex.exec(cleaned_coords)

var lat = m[1]
var long = m[2]

// Build the command
var command = `tpll ${lat} ${long}`


// Create a textarea for putting the command
$("body").prepend('<textarea id="textarea1" rows="5" cols="100">')
var textarea = $("#textarea1")

// Copy the command to the textarea and put it into the clipboard
textarea.text(command)
textarea.select()
document.execCommand('copy')

alert(`${command} copied`)

// Clean up
textarea.remove()
