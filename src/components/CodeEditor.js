import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { StreamLanguage } from '@codemirror/language';
import { c } from '@codemirror/legacy-modes/mode/clike';
import { Play, RefreshCw } from 'lucide-react';

export default function CodeEditor() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setCode(getDefaultCode(language));
  }, [language]);

  const getDefaultCode = (lang) => {
    switch (lang) {
      case 'python':
        return 'def solution(nums):\n  return sum(nums)\n\nprint(solution([1, 2, 3]))';
      case 'cpp':
        return '#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World";\n  return 0;\n}';
      case 'java':
        return 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}';
      case 'c':
        return '#include <stdio.h>\nint main() {\n  printf("Hello World");\n  return 0;\n}';
      default:
        return '';
    }
  };

  const getLanguageExtension = () => {
    switch (language) {
      case 'python':
        return python();
      case 'cpp':
        return cpp();
      case 'java':
        return java();
      case 'c':
        return StreamLanguage.define(c);
      default:
        return [];
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput('Sample Output\nExecution Complete');
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className='min-h-[82vh]'>
    <div className="max-w-4xl mx-auto mt-20 rounded border shadow">
      <div className="flex justify-between p-3 border-b">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="border p-1 rounded">
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="c">C</option>
        </select>
        <button onClick={() => setCode(getDefaultCode(language))} className="text-sm text-blue-500">Reset</button>
      </div>

      <CodeMirror
        value={code}
        height="300px"
        theme={oneDark}
        extensions={[getLanguageExtension()]}
        onChange={(value) =>{ setCode(value); console.log(value); }}
      />

      <div className="flex justify-between items-center p-3 border-t">
        <button
          onClick={handleRunCode}
          className={`flex items-center px-4 py-2 rounded text-white font-medium ${isRunning ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'}`}
          disabled={isRunning}
        >
          {isRunning ? (
            <>
              <RefreshCw size={16} className="mr-2 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <Play size={16} className="mr-2" />
              Run
            </>
          )}
        </button>
        <div className="text-sm text-gray-500">{code.split('\n').length} lines</div>
      </div>

      <div className="p-3 bg-gray-900 text-green-200 font-mono text-sm h-32 overflow-auto">
        {output || 'Run your code to see output'}
      </div>
    </div>
    </div>
  );
}
