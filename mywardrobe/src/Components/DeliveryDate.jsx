import { Text } from "@chakra-ui/react";

export function DeliveryDate()
{
    var x;
    var m_names = new Array("January", "February", "March", 
        "April", "May", "June", "July", "August", "September", 
        "October", "November", "December");

    var d = new Date();
    var twoDaysAgo = d.getDate()+1;  //change day here
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear();
    var x = twoDaysAgo + "-" + m_names[curr_month] + "-" + curr_year;

    return(
        <Text as={"span"}>({x})</Text>
    );
}