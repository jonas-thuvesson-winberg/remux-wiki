# AIOStreams Setup Guide

## Overview

AIOStreams is a Stremio addon that requires proper configuration to function. This guide walks through the essential setup steps.

> **Note:** Only AIOStreams is supported for this configuration method.

---

## Step 1: Set Up Your AIOStreams Manifest

Choose one of the following options:

### Option A: Use a Public Instance
Use the hosted AIOStreams instance:  
**https://aiostreams.elfhosted.com/stremio/configure**

### Option B: Self-Host (Recommended)
Self-hosting gives you full control and access to logs for troubleshooting.

📚 **Deployment Guide:** https://docs.aiostreams.viren070.me/getting-started/deployment/

---

## Step 2: Configure Your AIOStreams Settings

Navigate to the AIOStreams settings and configure the three essential components below:

### A. Add a Debrid Provider (Mandatory)

This provides access to cached torrents and streams.

1. Click the **settings cog icon** ⚙️
2. Enter your **Debrid token** (Real-Debrid, Alldebrid, Torbox, etc.)
3. Save your configuration

> **Alternative:** If not using Debrid, you can configure **Usenet** instead, though Debrid is preferred.

---

### B. Enable a Search Addon (Required)

Add a search-capable addon to discover content.

**Recommended options:**
- **TMDB** (via TMDB addon)
- **AIOMetadata**

⚠️ **Important:** Do NOT use the TMDB Collections addon—use the standard TMDB addon instead.

**Configuration steps:**
1. Add your chosen search addon
2. Enable the **search catalogs** in the addon settings
3. Scroll down and confirm the **search function is enabled**

---

### C. Add a Stream Provider Addon

Add an addon that provides the actual streaming links.

**Recommended options:**
- Comet
- Mediafusion
- Torrentio
- Other stream-providing addons

**Configuration steps:**
1. Add your chosen provider addon
2. Configure any required settings or API keys
3. Ensure the addon is enabled

---

## Configuration Tips

### Less is More
- **Don't overload** with multiple addons and catalogs
- Start with one search addon and one stream provider
- Add more only if needed for better results

### Quick Start: Use a Pre-Built Config
Import the starter configuration to skip manual setup:

```
https://github.com/lostb1t/Gelato/blob/6c5c749ebae7787fe886f2580b959dea17190ac2/aiostreams-config.json
```

**After importing:**
1. Navigate to AIOStreams settings
2. Go to the **Services** section
3. Enable your Debrid provider with your token
4. Verify all addons are active

---

## Summary Checklist

- [ ] AIOStreams manifest configured (public or self-hosted)
- [ ] Debrid provider added and token entered
- [ ] Search addon enabled (TMDB or AIOMetadata)
- [ ] Search catalogs enabled in addon settings
- [ ] Stream provider addon added and enabled
- [ ] (Optional) Pre-built config imported and Debrid provider re-enabled

---

## Need Help?

- 📖 **AIOStreams Docs:** https://docs.aiostreams.viren070.me/
- 🐛 **Report Issues:** Check the AIOStreams GitHub repository
- 💬 **Community:** Stremio Discord and subreddit communities