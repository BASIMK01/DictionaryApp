class Parent {
    protected String message;

    public Parent(String message) {
        this.message = message;
    }

    public void display() {
        System.out.println("Parent class: " + message);
    }
}

class Child extends Parent {
    private String additionalMessage;

    public Child(String message, String additionalMessage) {
        super(message);  // Call to the parent class constructor
        this.additionalMessage = additionalMessage;
    }

    @Override
    public void display() {
        super.display();  // Call to the parent class display() method
        System.out.println("Child class: " + additionalMessage);
    }
}

public class q49_super_keyword {
    public static void main(String[] args) {
        Child child = new Child("Hello", "World");
        child.display();
    }
}
