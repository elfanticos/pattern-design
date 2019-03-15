import { Component, OnInit } from '@angular/core';
import { TreeNumbers } from './tree-number';
import { TreeNumbersComposite } from './tree-number-composite';
import { TreeNumbersLeaf } from './tree-number-leaf';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.sass']
})
export class CompositeComponent implements OnInit {
  private root:TreeNumbers;
  private sub1:TreeNumbers;
  private sub11:TreeNumbers;
  private sub12:TreeNumbers;
  private leaf:TreeNumbers;

  constructor() { }

  ngOnInit() {
    this.root = new TreeNumbersComposite('root');
    this.root.add(new TreeNumbersLeaf(1));
    this.root.add(new TreeNumbersLeaf(2));

    this.sub1 = new TreeNumbersComposite('compuesto x');
    this.sub1.add(new TreeNumbersLeaf(3));
    this.sub1.add(new TreeNumbersLeaf(4));
    this.root.add(this.sub1);
    this.root.add(new TreeNumbersLeaf(5));
    this.leaf = new TreeNumbersLeaf(6);
    this.root.add(this.leaf);
    this.root.remove(this.leaf);
    this.root.toString();
    console.log(this.root.numberOfTreeNumbers());
  }

}
