import { Component,OnInit } from '@angular/core';
import { Animals } from '../../class/Animals ';
import { AnimalsServies } from '../../servies/animals-servies';
@Component({
  selector: 'app-our-animals-component',
  standalone: false,
  templateUrl: './our-animals-component.html',
  styleUrl: './our-animals-component.css',
})
export class OurAnimalsComponent implements OnInit {
allAnimals :Array<Animals>=new Array<Animals>();
    animal: Animals=new Animals();
    showAnimal:boolean=false;

  constructor(public a:AnimalsServies){}
  ngOnInit(): void {
    this.a.GetAllAnimals().subscribe(
      data=>{this.allAnimals=data;},
      error=>{alert("error while getting all animals");}
    )
}
onImageClick(image: Animals): void {
    this.animal={...image}
    this.showAnimal=true;
  }

  closeCaption(): void {
   
    this.animal=new Animals();
    this.showAnimal=false;
  }
}


