package methods;

import apiEngine.EmployeePojo;
import io.restassured.http.ContentType;
import org.hamcrest.core.Is;

import java.io.File;
import java.util.HashMap;
import java.util.LinkedHashMap;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsInAnyOrder;

public class BDDStyledMethod {

    //------------------------------GET API ----------------------------------------------
    public static void SimpleGET(int id){
        given().contentType(ContentType.JSON).
                when().get(String.format("http://localhost:3000/users/%s", id)).
                then().body("Name",is("virendra"));
    }

    public static void PerformContainsCollection() {
        given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:3000/users/")
                .then()
                .body("Name", containsInAnyOrder("virendra", "Avish")).statusCode(200);
    }

    public static void FindComapanyName(int id){
        given()
                .contentType(ContentType.JSON)
                .when()
                .get("http://localhost:3000/Company?id=3")
                .then()
                .body("Cname", contains("Altimetrik")).statusCode(200);

    }

    //------------------------------POST API ----------------------------------------------

    public static void AddEmployee(File str) {

        given()
                .contentType(ContentType.JSON).
                with()
                .body(str).
                when()
                .post("http://localhost:3000/users/").
                then().statusCode(201);
    }

    //------------------------------DELETE API ----------------------------------------------
    public static void DeleteEmployee(int id) {

        given().contentType(ContentType.JSON).
                when().delete(String.format("http://localhost:3000/users/%s", id)).
                then().statusCode(200);
    }
}
