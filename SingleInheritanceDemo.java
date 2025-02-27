class Animal {
    void eat() {
        System.out.println("The animal is eating.");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("The dog is barking.");
    }
}

public class SingleInheritanceDemo {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // Inherited from Animal class
        dog.bark(); // Defined in Dog class
    }
}
