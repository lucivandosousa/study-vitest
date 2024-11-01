import { describe, expect, it } from "vitest";
import User from "../User/User";

describe('Class User', () => {
  const person = new User(1, 'John Doe', 'john@example.com', 'pass123');

  it('should be an instance of User', () => {
    expect(person).toBeInstanceOf(User);
  });

  it('id should not be null', () => {
    expect(person.id).not.toBeNull();
  });

  it('should be equal to "john@example.com"', () => {
    expect(person.email).toEqual('john@example.com');
  });
});