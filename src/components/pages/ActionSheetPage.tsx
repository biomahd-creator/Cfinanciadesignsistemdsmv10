import { ComponentShowcase } from "../ui/component-showcase";
import { ActionSheet } from "../advanced/ActionSheet";
import { Button } from "../ui/button";
import { useState } from "react";
import { MoreVertical, Share2, Copy, Trash2, Download, Edit } from "lucide-react";

export function ActionSheetPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const basicActions = [
    { label: "Share", icon: <Share2 className="w-4 h-4" />, onClick: () => console.log("Share") },
    { label: "Copy Link", icon: <Copy className="w-4 h-4" />, onClick: () => console.log("Copy") },
    { label: "Download", icon: <Download className="w-4 h-4" />, onClick: () => console.log("Download") },
  ];

  const editActions = [
    { label: "Edit", icon: <Edit className="w-4 h-4" />, onClick: () => console.log("Edit") },
    { label: "Duplicate", icon: <Copy className="w-4 h-4" />, onClick: () => console.log("Duplicate") },
    { label: "Delete", icon: <Trash2 className="w-4 h-4" />, onClick: () => console.log("Delete"), destructive: true },
  ];

  return (
    <ComponentShowcase
      title="Action Sheet"
      description="A mobile-optimized menu that presents a set of actions related to the current context. Commonly used for contextual options, sharing, and quick actions triggered by a tap."
      category="Mobile Components"
      preview={
        <div className="flex flex-wrap gap-4 w-full">
          <Button onClick={() => setIsOpen1(true)}>
            <MoreVertical className="w-4 h-4 mr-2" />
            Basic Actions
          </Button>
          <ActionSheet 
            isOpen={isOpen1} 
            onClose={() => setIsOpen1(false)}
            title="Choose an action"
            actions={basicActions}
          />

          <Button onClick={() => setIsOpen2(true)} variant="outline">
            <MoreVertical className="w-4 h-4 mr-2" />
            Edit Options
          </Button>
          <ActionSheet 
            isOpen={isOpen2} 
            onClose={() => setIsOpen2(false)}
            title="Edit Item"
            actions={editActions}
          />

          <Button onClick={() => setIsOpen3(true)} variant="secondary">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <ActionSheet 
            isOpen={isOpen3} 
            onClose={() => setIsOpen3(false)}
            title="Share this content"
            actions={[
              { label: "Copy Link", icon: <Copy className="w-4 h-4" />, onClick: () => console.log("Copy") },
              { label: "Share via Email", onClick: () => console.log("Email") },
              { label: "Share on Twitter", onClick: () => console.log("Twitter") },
              { label: "Share on Facebook", onClick: () => console.log("Facebook") },
            ]}
          />
        </div>
      }
      code={`import { ActionSheet } from "@/components/advanced/ActionSheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Share2, Copy } from "lucide-react";

export function Example() {
  const [isOpen, setIsOpen] = useState(false);
  
  const actions = [
    { label: "Share", icon: <Share2 />, onClick: () => {} },
    { label: "Copy Link", icon: <Copy />, onClick: () => {} },
  ];
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Show Actions
      </Button>
      
      <ActionSheet 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Choose an action"
        actions={actions}
      />
    </>
  );
}`}
      usage="Action Sheets provide a native mobile experience for presenting context-specific actions. They're particularly useful on touch devices where context menus are less practical."
      usageCode={`import { ActionSheet } from "@/components/advanced/ActionSheet";
import { Edit, Copy, Trash2 } from "lucide-react";
import { useState } from "react";

export function ItemActions() {
  const [isOpen, setIsOpen] = useState(false);
  
  const actions = [
    { 
      label: "Edit", 
      icon: <Edit className="w-4 h-4" />, 
      onClick: () => handleEdit() 
    },
    { 
      label: "Duplicate", 
      icon: <Copy className="w-4 h-4" />, 
      onClick: () => handleDuplicate() 
    },
    { 
      label: "Delete", 
      icon: <Trash2 className="w-4 h-4" />, 
      onClick: () => handleDelete(),
      destructive: true 
    },
  ];
  
  return (
    <ActionSheet 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      title="Item Actions"
      actions={actions}
    />
  );
}`}
      props={[
        {
          name: "isOpen",
          type: "boolean",
          default: "false",
          description: "Controls the visibility of the action sheet",
          required: true,
        },
        {
          name: "onClose",
          type: "() => void",
          default: "undefined",
          description: "Callback when action sheet should close",
          required: true,
        },
        {
          name: "title",
          type: "string",
          default: '""',
          description: "Title displayed at the top",
          required: false,
        },
        {
          name: "actions",
          type: "Action[]",
          default: "[]",
          description: "Array of action objects with label, icon, onClick, and destructive properties",
          required: true,
        },
        {
          name: "cancelLabel",
          type: "string",
          default: '"Cancel"',
          description: "Label for the cancel button",
          required: false,
        },
      ]}
      examples={[
        {
          title: "Photo Actions",
          description: "Actions for managing a photo in a gallery",
          preview: (
            <div>
              <Button onClick={() => setIsOpen1(true)}>
                Photo Options
              </Button>
              <ActionSheet 
                isOpen={isOpen1} 
                onClose={() => setIsOpen1(false)}
                title="Photo Options"
                actions={[
                  { label: "View Full Size", onClick: () => console.log("View") },
                  { label: "Share", icon: <Share2 className="w-4 h-4" />, onClick: () => console.log("Share") },
                  { label: "Download", icon: <Download className="w-4 h-4" />, onClick: () => console.log("Download") },
                  { label: "Set as Profile Picture", onClick: () => console.log("Set") },
                  { label: "Delete Photo", icon: <Trash2 className="w-4 h-4" />, onClick: () => console.log("Delete"), destructive: true },
                ]}
              />
            </div>
          ),
          code: `const photoActions = [
  { label: "View Full Size", onClick: handleView },
  { label: "Share", icon: <Share2 />, onClick: handleShare },
  { label: "Download", icon: <Download />, onClick: handleDownload },
  { label: "Delete Photo", icon: <Trash2 />, onClick: handleDelete, destructive: true },
];

<ActionSheet 
  isOpen={isOpen} 
  onClose={onClose}
  title="Photo Options"
  actions={photoActions}
/>`,
        },
        {
          title: "Document Actions",
          description: "Common actions for document management",
          preview: (
            <div>
              <Button onClick={() => setIsOpen2(true)} variant="outline">
                Document Menu
              </Button>
              <ActionSheet 
                isOpen={isOpen2} 
                onClose={() => setIsOpen2(false)}
                title="Document Actions"
                actions={[
                  { label: "Open", onClick: () => console.log("Open") },
                  { label: "Edit", icon: <Edit className="w-4 h-4" />, onClick: () => console.log("Edit") },
                  { label: "Make a Copy", icon: <Copy className="w-4 h-4" />, onClick: () => console.log("Copy") },
                  { label: "Download PDF", icon: <Download className="w-4 h-4" />, onClick: () => console.log("Download") },
                  { label: "Share", icon: <Share2 className="w-4 h-4" />, onClick: () => console.log("Share") },
                  { label: "Move to Trash", icon: <Trash2 className="w-4 h-4" />, onClick: () => console.log("Trash"), destructive: true },
                ]}
              />
            </div>
          ),
          code: `const documentActions = [
  { label: "Open", onClick: handleOpen },
  { label: "Edit", icon: <Edit />, onClick: handleEdit },
  { label: "Make a Copy", icon: <Copy />, onClick: handleCopy },
  { label: "Download PDF", icon: <Download />, onClick: handleDownload },
  { label: "Move to Trash", icon: <Trash2 />, destructive: true },
];

<ActionSheet actions={documentActions} />`,
        },
        {
          title: "Social Share Options",
          description: "Sharing content to various platforms",
          preview: (
            <div>
              <Button onClick={() => setIsOpen3(true)}>
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
              <ActionSheet 
                isOpen={isOpen3} 
                onClose={() => setIsOpen3(false)}
                title="Share Article"
                actions={[
                  { label: "Copy Link", icon: <Copy className="w-4 h-4" />, onClick: () => console.log("Copy") },
                  { label: "Share via Email", onClick: () => console.log("Email") },
                  { label: "Share on Twitter", onClick: () => console.log("Twitter") },
                  { label: "Share on Facebook", onClick: () => console.log("Facebook") },
                  { label: "Share on LinkedIn", onClick: () => console.log("LinkedIn") },
                  { label: "Share on WhatsApp", onClick: () => console.log("WhatsApp") },
                ]}
              />
            </div>
          ),
          code: `const shareActions = [
  { label: "Copy Link", icon: <Copy />, onClick: copyLink },
  { label: "Share via Email", onClick: shareEmail },
  { label: "Share on Twitter", onClick: shareTwitter },
  { label: "Share on Facebook", onClick: shareFacebook },
  { label: "Share on LinkedIn", onClick: shareLinkedIn },
];

<ActionSheet 
  title="Share Article"
  actions={shareActions}
/>`,
        },
        {
          title: "Message Actions",
          description: "Actions for a message in a chat app",
          preview: (
            <div>
              <Button onClick={() => setIsOpen1(true)} variant="ghost">
                <MoreVertical className="w-4 h-4" />
              </Button>
              <ActionSheet 
                isOpen={isOpen1} 
                onClose={() => setIsOpen1(false)}
                title="Message Options"
                actions={[
                  { label: "Reply", onClick: () => console.log("Reply") },
                  { label: "Forward", icon: <Share2 className="w-4 h-4" />, onClick: () => console.log("Forward") },
                  { label: "Copy Text", icon: <Copy className="w-4 h-4" />, onClick: () => console.log("Copy") },
                  { label: "Pin Message", onClick: () => console.log("Pin") },
                  { label: "Report", onClick: () => console.log("Report"), destructive: true },
                  { label: "Delete", icon: <Trash2 className="w-4 h-4" />, onClick: () => console.log("Delete"), destructive: true },
                ]}
              />
            </div>
          ),
          code: `const messageActions = [
  { label: "Reply", onClick: handleReply },
  { label: "Forward", icon: <Share2 />, onClick: handleForward },
  { label: "Copy Text", icon: <Copy />, onClick: handleCopy },
  { label: "Pin Message", onClick: handlePin },
  { label: "Delete", icon: <Trash2 />, destructive: true },
];

<ActionSheet 
  title="Message Options"
  actions={messageActions}
/>`,
        },
        {
          title: "Profile Actions",
          description: "User profile contextual menu",
          preview: (
            <div>
              <Button onClick={() => setIsOpen2(true)}>
                Profile Options
              </Button>
              <ActionSheet 
                isOpen={isOpen2} 
                onClose={() => setIsOpen2(false)}
                title="Profile Menu"
                actions={[
                  { label: "View Profile", onClick: () => console.log("View") },
                  { label: "Edit Profile", icon: <Edit className="w-4 h-4" />, onClick: () => console.log("Edit") },
                  { label: "Share Profile", icon: <Share2 className="w-4 h-4" />, onClick: () => console.log("Share") },
                  { label: "Settings", onClick: () => console.log("Settings") },
                  { label: "Sign Out", onClick: () => console.log("Sign Out"), destructive: true },
                ]}
              />
            </div>
          ),
          code: `const profileActions = [
  { label: "View Profile", onClick: viewProfile },
  { label: "Edit Profile", icon: <Edit />, onClick: editProfile },
  { label: "Share Profile", icon: <Share2 />, onClick: shareProfile },
  { label: "Settings", onClick: openSettings },
  { label: "Sign Out", destructive: true },
];

<ActionSheet 
  title="Profile Menu"
  actions={profileActions}
/>`,
        },
      ]}
    />
  );
}
