var text;


var TimeOfDay=prompt("WHAT TIME OF DAY IS IT?")
switch(TimeOfDay){
	case "morning":
    	text= "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
    	break;

    case "noon":
    	text= "Since it is noon, you should be eating lunch. We suggest a salad.";
    	break;

    case "evening":
    	text= "Since it is evening, you should be eating dinner. We suggest a chicken and rice.";
    	break;

    default:
       text="you must either morning noon or evening";
}
console.log(text)
