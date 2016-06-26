# angular-timedropper
[![npm version](https://badge.fury.io/js/angular-timedropper.svg)](https://badge.fury.io/js/angular-timedropper)
This is an angular directive for jQuery plugin **timedropper**. 
http://felicegattuso.com/projects/timedropper/

## Installation
> npm install angular-timedropper
Or, simply download from github and add to your project.
**Dependencies:**

* jQuery
* timedropper (https://github.com/felicegattuso/timedropper/)


## Usage

 
in html 

    <input time-dropper on-change="scope"/>

in angular

    angular.module('directives', ['angular-timedropper']);

**Options**





* **format = "h:mm a"** - A time format string that timeDropper expects existing values to be in and will write times out it. (Default: h:mm
a)
* **auto-switch = "true/false"** - Automatically change hour-minute or minute-hour on mouseup/touchend. (Default: false)
* **meridians = "true/false"** - Set time in 12-hour clock in which the 24 hours of the day are divided into two periods. (Default: false)
* **mouse-wheel = "true/false"** - Enables time change using mouse wheel. (Default: false)
* **set-current-time = "true/false"** - Automatically set current time by default.(Default: true)
* **init-animation = "fadeIn/dropDown"** - Animation Style to use when init timedropper. 
* **primary-color= "#FFFFFF"** - Specify a color value for drop down accent color. Default: #1977CC
* **border-color = "#555555"** - Specify a colour value for drop down border color. Default: #1977CC
* **background-color = "#FFFFFF"** - Specify a color value for drop down background color. Default: #FFFFFF
* **text-color = "#000000"** - Specify a color value for drop down text color. Default: #555

for more options please visit:
http://felicegattuso.com/projects/timedropper/	


## Example

    <input time-dropper on-change="valueText" mouse-wheel="true"/>

Example on JSBin: http://jsbin.com/ziyipeh

