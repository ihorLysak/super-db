interface AbstractService<T> {
  create(payload: unknown): Promise<T>;
  delete(id: number): Promise<boolean>;
}

export { AbstractService };
