# `kafkaClusterTopic` Submodule <a name="`kafkaClusterTopic` Submodule" id="@cdktf/provider-ionoscloud.kafkaClusterTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaClusterTopic <a name="KafkaClusterTopic" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic ionoscloud_kafka_cluster_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopic;

KafkaClusterTopic.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .numberOfPartitions(java.lang.Number)
//  .replicationFactor(java.lang.Number)
//  .retentionTime(java.lang.Number)
//  .segmentBytes(java.lang.Number)
//  .timeouts(KafkaClusterTopicTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the Kafka Cluster to which the topic belongs. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl, es/vit, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of your Kafka Cluster Topic. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.numberOfPartitions">numberOfPartitions</a></code> | <code>java.lang.Number</code> | The number of partitions of the topic. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | The number of replicas of the topic. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | This configuration controls the maximum time we will retain a log before we will discard old log segments to free up space. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.segmentBytes">segmentBytes</a></code> | <code>java.lang.Number</code> | This configuration controls the segment file size for the log. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

The ID of the Kafka Cluster to which the topic belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#cluster_id KafkaClusterTopic#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl, es/vit, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#location KafkaClusterTopic#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of your Kafka Cluster Topic.

Must be 63 characters or less and must begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#name KafkaClusterTopic#name}

---

##### `numberOfPartitions`<sup>Optional</sup> <a name="numberOfPartitions" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.numberOfPartitions"></a>

- *Type:* java.lang.Number

The number of partitions of the topic.

Partitions allow for parallel processing of messages. The partition count must be greater than or equal to the replication factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#number_of_partitions KafkaClusterTopic#number_of_partitions}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

The number of replicas of the topic.

The replication factor determines how many copies of the topic are stored on different brokers. The replication factor must be less than or equal to the number of brokers in the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#replication_factor KafkaClusterTopic#replication_factor}

---

##### `retentionTime`<sup>Optional</sup> <a name="retentionTime" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.retentionTime"></a>

- *Type:* java.lang.Number

This configuration controls the maximum time we will retain a log before we will discard old log segments to free up space.

This represents an SLA on how soon consumers must read their data. If set to -1, no time limit is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#retention_time KafkaClusterTopic#retention_time}

---

##### `segmentBytes`<sup>Optional</sup> <a name="segmentBytes" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.segmentBytes"></a>

- *Type:* java.lang.Number

This configuration controls the segment file size for the log.

Retention and cleaning is always done a file at a time so a larger segment size means fewer files but less granular control over retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#segment_bytes KafkaClusterTopic#segment_bytes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#timeouts KafkaClusterTopic#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetNumberOfPartitions">resetNumberOfPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetRetentionTime">resetRetentionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetSegmentBytes">resetSegmentBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.putTimeouts"></a>

```java
public void putTimeouts(KafkaClusterTopicTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a>

---

##### `resetNumberOfPartitions` <a name="resetNumberOfPartitions" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetNumberOfPartitions"></a>

```java
public void resetNumberOfPartitions()
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetReplicationFactor"></a>

```java
public void resetReplicationFactor()
```

##### `resetRetentionTime` <a name="resetRetentionTime" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetRetentionTime"></a>

```java
public void resetRetentionTime()
```

##### `resetSegmentBytes` <a name="resetSegmentBytes" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetSegmentBytes"></a>

```java
public void resetSegmentBytes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KafkaClusterTopic resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopic;

KafkaClusterTopic.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopic;

KafkaClusterTopic.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopic;

KafkaClusterTopic.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopic;

KafkaClusterTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KafkaClusterTopic.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KafkaClusterTopic resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KafkaClusterTopic to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KafkaClusterTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KafkaClusterTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference">KafkaClusterTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.numberOfPartitionsInput">numberOfPartitionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.retentionTimeInput">retentionTimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.segmentBytesInput">segmentBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.numberOfPartitions">numberOfPartitions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.segmentBytes">segmentBytes</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.timeouts"></a>

```java
public KafkaClusterTopicTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference">KafkaClusterTopicTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numberOfPartitionsInput`<sup>Optional</sup> <a name="numberOfPartitionsInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.numberOfPartitionsInput"></a>

```java
public java.lang.Number getNumberOfPartitionsInput();
```

- *Type:* java.lang.Number

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `retentionTimeInput`<sup>Optional</sup> <a name="retentionTimeInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.retentionTimeInput"></a>

```java
public java.lang.Number getRetentionTimeInput();
```

- *Type:* java.lang.Number

---

##### `segmentBytesInput`<sup>Optional</sup> <a name="segmentBytesInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.segmentBytesInput"></a>

```java
public java.lang.Number getSegmentBytesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfPartitions`<sup>Required</sup> <a name="numberOfPartitions" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.numberOfPartitions"></a>

```java
public java.lang.Number getNumberOfPartitions();
```

- *Type:* java.lang.Number

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `retentionTime`<sup>Required</sup> <a name="retentionTime" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.retentionTime"></a>

```java
public java.lang.Number getRetentionTime();
```

- *Type:* java.lang.Number

---

##### `segmentBytes`<sup>Required</sup> <a name="segmentBytes" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.segmentBytes"></a>

```java
public java.lang.Number getSegmentBytes();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopic.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaClusterTopicConfig <a name="KafkaClusterTopicConfig" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopicConfig;

KafkaClusterTopicConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .numberOfPartitions(java.lang.Number)
//  .replicationFactor(java.lang.Number)
//  .retentionTime(java.lang.Number)
//  .segmentBytes(java.lang.Number)
//  .timeouts(KafkaClusterTopicTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | The ID of the Kafka Cluster to which the topic belongs. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl, es/vit, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of your Kafka Cluster Topic. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.numberOfPartitions">numberOfPartitions</a></code> | <code>java.lang.Number</code> | The number of partitions of the topic. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | The number of replicas of the topic. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.retentionTime">retentionTime</a></code> | <code>java.lang.Number</code> | This configuration controls the maximum time we will retain a log before we will discard old log segments to free up space. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.segmentBytes">segmentBytes</a></code> | <code>java.lang.Number</code> | This configuration controls the segment file size for the log. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

The ID of the Kafka Cluster to which the topic belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#cluster_id KafkaClusterTopic#cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of your Kafka Cluster Topic. Supported locations: de/fra, de/txl, es/vit, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#location KafkaClusterTopic#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of your Kafka Cluster Topic.

Must be 63 characters or less and must begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#name KafkaClusterTopic#name}

---

##### `numberOfPartitions`<sup>Optional</sup> <a name="numberOfPartitions" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.numberOfPartitions"></a>

```java
public java.lang.Number getNumberOfPartitions();
```

- *Type:* java.lang.Number

The number of partitions of the topic.

Partitions allow for parallel processing of messages. The partition count must be greater than or equal to the replication factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#number_of_partitions KafkaClusterTopic#number_of_partitions}

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

The number of replicas of the topic.

The replication factor determines how many copies of the topic are stored on different brokers. The replication factor must be less than or equal to the number of brokers in the Kafka Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#replication_factor KafkaClusterTopic#replication_factor}

---

##### `retentionTime`<sup>Optional</sup> <a name="retentionTime" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.retentionTime"></a>

```java
public java.lang.Number getRetentionTime();
```

- *Type:* java.lang.Number

This configuration controls the maximum time we will retain a log before we will discard old log segments to free up space.

This represents an SLA on how soon consumers must read their data. If set to -1, no time limit is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#retention_time KafkaClusterTopic#retention_time}

---

##### `segmentBytes`<sup>Optional</sup> <a name="segmentBytes" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.segmentBytes"></a>

```java
public java.lang.Number getSegmentBytes();
```

- *Type:* java.lang.Number

This configuration controls the segment file size for the log.

Retention and cleaning is always done a file at a time so a larger segment size means fewer files but less granular control over retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#segment_bytes KafkaClusterTopic#segment_bytes}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicConfig.property.timeouts"></a>

```java
public KafkaClusterTopicTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#timeouts KafkaClusterTopic#timeouts}

---

### KafkaClusterTopicTimeouts <a name="KafkaClusterTopicTimeouts" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopicTimeouts;

KafkaClusterTopicTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#create KafkaClusterTopic#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#default KafkaClusterTopic#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#delete KafkaClusterTopic#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#update KafkaClusterTopic#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#create KafkaClusterTopic#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#default KafkaClusterTopic#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#delete KafkaClusterTopic#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.0/docs/resources/kafka_cluster_topic#update KafkaClusterTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaClusterTopicTimeoutsOutputReference <a name="KafkaClusterTopicTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.kafka_cluster_topic.KafkaClusterTopicTimeoutsOutputReference;

new KafkaClusterTopicTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.kafkaClusterTopic.KafkaClusterTopicTimeouts">KafkaClusterTopicTimeouts</a>

---



