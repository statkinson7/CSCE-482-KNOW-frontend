import * as React from 'react';
import { KnowledgePanelData } from './types';
import Body from './Body/Body';
import Header from './Header/Header';
import './KnowledgePanel.css';

interface KnowledgePanelProps {
  data: KnowledgePanelData;
  backendURL: string;
}

const KnowledgePanel: React.FC<KnowledgePanelProps> = ({ data, backendURL }) => {
  const {
    title, subtitle, description, entries,
  } = data;

  return (
    <div className="knowledge-panel-base">
      <Header title={title} subtitle={subtitle} />
      <div className="horizontal-separator" />
      <Body description={description} entries={entries} backendURL={backendURL} />
    </div>
  );
};

export default KnowledgePanel;
