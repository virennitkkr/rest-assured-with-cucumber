package methods;

import java.util.LinkedHashMap;

public class Testdata {

    public static LinkedHashMap AddEmp()
        {
            LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
            map.put("ID", "12");
            map.put("Name", "jon");
            map.put("EmailID", "jon@gmail.com");
            map.put("Mobile", "9910882288");
            System.out.println(map);
            return map;
        }
}
