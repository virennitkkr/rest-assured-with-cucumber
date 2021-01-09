package options;


import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

@RunWith(Cucumber.class)

@CucumberOptions (features="src/test/features",glue={"stepdefs"},
        plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json",
                "junit:target/cucumber-reports/Cucumber.xml",
                "html:target/cucumber-reports/site/cucumber-pretty"},
        monochrome = true)

public class CucumberTests extends AbstractTestNGCucumberTests {
    @BeforeClass
    public static  void beforeall(){
        System.out.println("Before all suit");
    }


    @AfterClass
    public static  void all(){
        System.out.println("After All Suit");
    }

}
