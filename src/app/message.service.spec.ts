import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service.js';
import { describe, beforeEach, it } from 'node:test';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.inject(MessageService);
    expect(service).toBeTruthy();
  });
});
