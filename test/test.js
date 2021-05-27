const assert = require('assert');
const ISO6391 = require('../build/index');

describe('getName()', function() {
  it('en', function() {
    assert.equal(ISO6391.getName('en'), 'English');
  });
  it.only('en', function() {
    assert.equal(ISO6391.getName('en-GB'), 'English (United Kingdom)');
  });
  it('zh', function() {
    assert.equal(ISO6391.getName('zh'), 'Chinese');
  });
  it('zh', function() {
    assert.equal(ISO6391.getName('zh-Hans'), 'Chinese (Simplified)');
  });
  it('xx', function() {
    assert.equal(ISO6391.getName('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getName('toString'), '');
  });
});

describe('getNativeName()', function() {
  it('en', function() {
    assert.equal(ISO6391.getNativeName('en'), 'English');
  });
  it('en', function() {
    assert.equal(ISO6391.getNativeName('en-GB'), 'English (United Kingdom)');
  });
  it('zh', function() {
    assert.equal(ISO6391.getNativeName('zh'), '中文');
  });
  it('zh-Hans', function() {
    assert.equal(ISO6391.getNativeName('zh-Hans'), '中文（简体）');
  });
  it('xx', function() {
    assert.equal(ISO6391.getNativeName('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getNativeName('toString'), '');
  });
});

describe('getCode()', function() {
  it('English', function() {
    assert.equal(ISO6391.getCode('English'), 'en');
  });
  it('English (UK)', function() {
    assert.equal(ISO6391.getCode('English (United Kingdom)'), 'en-GB');
  });
  it('Chinese', function() {
    assert.equal(ISO6391.getCode('Chinese'), 'zh');
  });
  it('Chinese (Simplified)', function() {
    assert.equal(ISO6391.getCode('Chinese (Simplified'), 'zh-Hans');
  });
  it('中文', function() {
    assert.equal(ISO6391.getCode('中文'), 'zh');
  });
  it('xx', function() {
    assert.equal(ISO6391.getCode('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getCode('toString'), '');
  });
});

describe('validate()', function() {
  it('en', function() {
    assert.equal(ISO6391.validate('en'), true);
  });
  it('en-GB', function() {
    assert.equal(ISO6391.validate('en-GB'), true);
  });
  it('zh', function() {
    assert.equal(ISO6391.validate('zh'), true);
  });
  it('zh-Hans', function() {
    assert.equal(ISO6391.validate('zh-Hans'), true);
  });
  it('xx', function() {
    assert.equal(ISO6391.validate('xx'), false);
  });
  it('toString', function() {
    assert.equal(ISO6391.validate('toString'), false);
  });
});

describe('getLanguages()', function() {
  it('[en, zh, pt-BR, xx, toString]', function() {
    assert.deepEqual(ISO6391.getLanguages(['en', 'zh', 'pt-BR', 'xx', 'toString']), [
      {
        code: 'en',
        name: 'English',
        nativeName: 'English',
      },
      {
        code: 'zh',
        name: 'Chinese',
        nativeName: '中文',
      },
      {
        code: 'pt-BR',
        name: 'Portuguese (Brazil)',
        nativeName: 'Português (Brasil)',
      },
      {
        code: 'xx',
        name: '',
        nativeName: '',
      },
      {
        code: 'toString',
        name: '',
        nativeName: '',
      },
    ]);
  });
});
