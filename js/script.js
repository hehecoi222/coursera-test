var company = new Object()
company.name="Google"
company.ceo = new Object()
company.ceo.firstName="Sundar"
company.ceo.favColor = "Color"
console.log(company)
console.log("the ceo of "+company.name + " has the first name that " + company.ceo.firstName)

//company.$stock of company = 110 Not work
company["stock of company"] = 110

console.log("stock of the comapny is "+ company["stock of company"])

//You can even do this:

stockPropName = "stock of company"

company[stockPropName] = 220
console.log("stock of the company is "+ company[stockPropName])