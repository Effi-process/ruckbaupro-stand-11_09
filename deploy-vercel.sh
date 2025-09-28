#!/bin/bash
# Vercel Deploy Hook
DEPLOY_HOOK="https://api.vercel.com/v1/integrations/deploy/YOUR_HOOK_HERE"

# Trigger deployment
curl -X POST "$DEPLOY_HOOK"
echo "Deployment triggered!"
