// @ts-check

import Node from './Node.js';

/**
 * Directory
 * @example
 * const dir = new Dir('/');
 */
export default class extends Node {
  /**
   * Constructor
   */
  constructor(name) {
    super(name);
    this.file = false;
    this.directory = true;
  }

  /**
   * Returns true if it's a file system directory.
   * @example
   * const dir = new Dir('/');
   * dir.isDirectory(); // true
   */
  isDirectory() {
    return this.directory;
  }

  /**
   * Returns false if it's a file system directory.
   * @example
   * const dir = new Dir('/');
   * dir.isFile(); // false
   */
  isFile() {
    return this.file;
  }
}
