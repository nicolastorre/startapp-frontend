export class Container {
  private static instances: Map<string, any> = new Map();
  private static factories: Map<string, () => any> = new Map();
  private static transientFactories: Map<string, () => any> = new Map();

  // Register a singleton instance directly
  static register<T>(name: string, instance: T) {
    this.instances.set(name, instance);
  }

  // Register a singleton factory that creates the instance lazily
  static registerLazy<T>(name: string, factory: () => T) {
    this.factories.set(name, factory);
  }

  // Register a transient factory, which creates a new instance every time it's requested
  static registerTransient<T>(name: string, factory: () => T) {
    this.transientFactories.set(name, factory);
  }

  // Retrieve an instance by name
  static get<T>(name: string): T {
    // Check if a singleton instance already exists
    if (this.instances.has(name)) {
      return this.instances.get(name);
    }

    // Check if there's a factory for lazy singleton instantiation
    if (this.factories.has(name)) {
      const factory = this.factories.get(name);
      if (factory) {
        const instance = factory();
        this.instances.set(name, instance); // Cache the instance
        return instance;
      }
    }

    // Check if there's a transient factory
    if (this.transientFactories.has(name)) {
      const factory = this.transientFactories.get(name);
      if (factory) {
        return factory(); // Return a new instance each time
      }
    }

    throw new Error(`Instance or factory for ${name} not found`);
  }

  // Clear all registered instances and factories (useful for testing or resetting the container)
  static clear() {
    this.instances.clear();
    this.factories.clear();
    this.transientFactories.clear();
  }
}
