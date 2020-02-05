# Criminal-Identifier
A javascript applicaiton that uses a Map datastructure to indentify the most probable criminal from multiple options

# Description
The applicaiton uses a Map datastructure and returns the most probable criminal having the name (provided by
interviewed people) as an input. The function returns a string in the following shape:
"First name: name. Aliases: alias0, alias1, aliasN".

If there is no match, the response should be "No match".
Of course, matching the actual name of the criminal is more meaningful than matching an alias
and having an exact match is more meaningful than a partial match.

