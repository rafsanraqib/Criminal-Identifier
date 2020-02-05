const criminals = new Map();
criminals.set("Paul White", "Roger Night, Peter Llong Jr.");
criminals.set("Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire");
criminals.set("Paul White Jr.", null);
criminals.set("Red Fortress", "Roger Rabbit, Ross Winter");
criminals.set("Redford Fort", "Red Strong, Red Fort");

var match = "";
var ret_string = "";

// Checks if input is an exact match with real name
function criminalIdentifier(user_input){
    

    var array = user_input.split(" ");
    var first_name, last_name;
    if(array.length == 2){
        first_name = array[0];
        first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1) + " "; 
        last_name = array[1];
        last_name = last_name.charAt(0).toUpperCase() + last_name.slice(1);
    }else if(array.length == 1){
        first_name = array[0];
        first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1) + " ";
        last_name = "NONE";
    }
    let full_name = first_name + last_name;
    let first_name_len = first_name.length;
    let last_name_len = last_name.length;

    // Check for exact match with real name
    for(let[k,v] of criminals){
        if(k == full_name){
            ret_string = "First Name: " + k + ". Aliases: " + criminals.get(k) + ".";
            return ret_string;
        }
    }

    // Checks if input is a partial match with real name
    // Does not return because there may be an exact alias match
    for(let[k,v] of criminals){
        let _firstname = k.substring(0, first_name_len);
        let _lastname = k.substring(k.length-last_name_len, k.length);
        if(first_name == _firstname){
            match = k;
        }else if(last_name == _lastname){
            match = k;
        }
    }

    // Check if exact match with alias
    for(let[k,v] of criminals){
        if(v == null){
            continue;
        }
        let temp_arr = v.split(",");
        for(let i = 0; i < temp_arr.length; i++){
            if(temp_arr[i] == full_name){
                ret_string = "First Name: " + k + ". Aliases: " + criminals.get(k) + ".";
                return ret_string;
            }
        }
    }

    // Checks if partial match with alias  
    for(let[k,v] of criminals){
        if(v == null){
            continue;
        }
        let temp_arr = v.split(",");
        for(let i = 0; i < temp_arr.length; i++){
            var _firstname;
            temp_arr[i][0]== " " ? _firstname = temp_arr[i].substring(1, first_name_len+1) : _firstname = temp_arr[i].substring(0,first_name_len);
            let _lastname = temp_arr[i].substring((temp_arr[i].length - last_name_len), temp_arr[i].length);
            if(_firstname == first_name){
                match.length == 0? match = k:match = match;
            }else if(_lastname == last_name){
                match.length == 0? match = k:match = match;
            }
        }
    }

    if(match.length == 0){
        return "No Match";
    }
    
    ret_string = "First Name: " + match + ". Aliases: " + criminals.get(match) + ".";
    return ret_string;
}

