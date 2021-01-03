
import { Car } from "./car";
import { carConfiguration } from "./car-config";


let obj: carConfiguration = { carValue: 'Cretra', brandValue: 'Hyundai', colorValue: 'RED', trans: true, make: 2021 };

let c = new Car(obj);

c.getData();
