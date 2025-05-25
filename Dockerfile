FROM node:23-bookworm-slim AS base


FROM base AS deps

RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*


# ワークスペースディレクトリを作成
WORKDIR /workspace
# タイムゾーンを設定
ENV TZ=Asia/Tokyo