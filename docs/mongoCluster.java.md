# `mongoCluster` Submodule <a name="`mongoCluster` Submodule" id="@cdktf/provider-ionoscloud.mongoCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongoCluster <a name="MongoCluster" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster ionoscloud_mongo_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoCluster;

MongoCluster.Builder.create(Construct scope, java.lang.String id)
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
    .connections(MongoClusterConnections)
    .displayName(java.lang.String)
    .instances(java.lang.Number)
    .location(java.lang.String)
    .mongodbVersion(java.lang.String)
//  .backup(MongoClusterBackup)
//  .biConnector(MongoClusterBiConnector)
//  .cores(java.lang.Number)
//  .edition(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceWindow(MongoClusterMaintenanceWindow)
//  .ram(java.lang.Number)
//  .shards(java.lang.Number)
//  .storageSize(java.lang.Number)
//  .storageType(java.lang.String)
//  .templateId(java.lang.String)
//  .timeouts(MongoClusterTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.instances">instances</a></code> | <code>java.lang.Number</code> | The total number of instances in the cluster (one master and n-1 standbys). |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The physical location where the cluster will be created. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.mongodbVersion">mongodbVersion</a></code> | <code>java.lang.String</code> | The MongoDB version of your cluster. Update forces cluster re-creation. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.biConnector">biConnector</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | bi_connector block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.cores">cores</a></code> | <code>java.lang.Number</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | The cluster edition. Must be one of: playground, business, enterprise. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#id MongoCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.ram">ram</a></code> | <code>java.lang.Number</code> | The amount of memory per instance in megabytes. Multiple of 1024. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.shards">shards</a></code> | <code>java.lang.Number</code> | The total number of shards in the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | The amount of storage per instance in megabytes. At least 5120, at most 2097152. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | The storage type. One of : HDD, SSD, SSD Standard, SSD Premium. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.templateId">templateId</a></code> | <code>java.lang.String</code> | The unique ID of the template, which specifies the number of cores, storage size, and memory. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The cluster type, either `replicaset` or `sharded-cluster`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#connections MongoCluster#connections}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The name of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#display_name MongoCluster#display_name}

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.instances"></a>

- *Type:* java.lang.Number

The total number of instances in the cluster (one master and n-1 standbys).

Example: 1, 3, 5, 7. For enterprise edition at least 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#instances MongoCluster#instances}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The physical location where the cluster will be created.

This will be where all of your instances live. Property cannot be modified after datacenter creation (disallowed in update requests). Available locations: de/txl, gb/lhr, es/vit. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#location MongoCluster#location}

---

##### `mongodbVersion`<sup>Required</sup> <a name="mongodbVersion" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.mongodbVersion"></a>

- *Type:* java.lang.String

The MongoDB version of your cluster. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#mongodb_version MongoCluster#mongodb_version}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#backup MongoCluster#backup}

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.biConnector"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

bi_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#bi_connector MongoCluster#bi_connector}

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.cores"></a>

- *Type:* java.lang.Number

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#cores MongoCluster#cores}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

The cluster edition. Must be one of: playground, business, enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#edition MongoCluster#edition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#id MongoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#maintenance_window MongoCluster#maintenance_window}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.ram"></a>

- *Type:* java.lang.Number

The amount of memory per instance in megabytes. Multiple of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#ram MongoCluster#ram}

---

##### `shards`<sup>Optional</sup> <a name="shards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.shards"></a>

- *Type:* java.lang.Number

The total number of shards in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#shards MongoCluster#shards}

---

##### `storageSize`<sup>Optional</sup> <a name="storageSize" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageSize"></a>

- *Type:* java.lang.Number

The amount of storage per instance in megabytes. At least 5120, at most 2097152.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#storage_size MongoCluster#storage_size}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

The storage type. One of : HDD, SSD, SSD Standard, SSD Premium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#storage_type MongoCluster#storage_type}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.templateId"></a>

- *Type:* java.lang.String

The unique ID of the template, which specifies the number of cores, storage size, and memory.

You cannot downgrade to a smaller template or minor edition (e.g. from business to playground). To get a list of all templates to confirm the changes use the /templates endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#template_id MongoCluster#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#timeouts MongoCluster#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The cluster type, either `replicaset` or `sharded-cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#type MongoCluster#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup">putBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBiConnector">putBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBackup">resetBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBiConnector">resetBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetCores">resetCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetRam">resetRam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetShards">resetShards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageSize">resetStorageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTemplateId">resetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackup` <a name="putBackup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup"></a>

```java
public void putBackup(MongoClusterBackup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

---

##### `putBiConnector` <a name="putBiConnector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBiConnector"></a>

```java
public void putBiConnector(MongoClusterBiConnector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putBiConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

---

##### `putConnections` <a name="putConnections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections"></a>

```java
public void putConnections(MongoClusterConnections value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(MongoClusterMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts"></a>

```java
public void putTimeouts(MongoClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---

##### `resetBackup` <a name="resetBackup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBackup"></a>

```java
public void resetBackup()
```

##### `resetBiConnector` <a name="resetBiConnector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetBiConnector"></a>

```java
public void resetBiConnector()
```

##### `resetCores` <a name="resetCores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetCores"></a>

```java
public void resetCores()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetRam` <a name="resetRam" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetRam"></a>

```java
public void resetRam()
```

##### `resetShards` <a name="resetShards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetShards"></a>

```java
public void resetShards()
```

##### `resetStorageSize` <a name="resetStorageSize" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageSize"></a>

```java
public void resetStorageSize()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTemplateId` <a name="resetTemplateId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTemplateId"></a>

```java
public void resetTemplateId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MongoCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoCluster;

MongoCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoCluster;

MongoCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoCluster;

MongoCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoCluster;

MongoCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MongoCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MongoCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MongoCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MongoCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MongoCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference">MongoClusterBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnector">biConnector</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference">MongoClusterBiConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference">MongoClusterConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionString">connectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference">MongoClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backupInput">backupInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnectorInput">biConnectorInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionsInput">connectionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.coresInput">coresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instancesInput">instancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersionInput">mongodbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ramInput">ramInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shardsInput">shardsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSizeInput">storageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateIdInput">templateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cores">cores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instances">instances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersion">mongodbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ram">ram</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shards">shards</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backup"></a>

```java
public MongoClusterBackupOutputReference getBackup();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference">MongoClusterBackupOutputReference</a>

---

##### `biConnector`<sup>Required</sup> <a name="biConnector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnector"></a>

```java
public MongoClusterBiConnectorOutputReference getBiConnector();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference">MongoClusterBiConnectorOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connections"></a>

```java
public MongoClusterConnectionsOutputReference getConnections();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference">MongoClusterConnectionsOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionString"></a>

```java
public java.lang.String getConnectionString();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindow"></a>

```java
public MongoClusterMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference">MongoClusterMaintenanceWindowOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeouts"></a>

```java
public MongoClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a>

---

##### `backupInput`<sup>Optional</sup> <a name="backupInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.backupInput"></a>

```java
public MongoClusterBackup getBackupInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

---

##### `biConnectorInput`<sup>Optional</sup> <a name="biConnectorInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.biConnectorInput"></a>

```java
public MongoClusterBiConnector getBiConnectorInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.connectionsInput"></a>

```java
public MongoClusterConnections getConnectionsInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.coresInput"></a>

```java
public java.lang.Number getCoresInput();
```

- *Type:* java.lang.Number

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instancesInput"></a>

```java
public java.lang.Number getInstancesInput();
```

- *Type:* java.lang.Number

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.maintenanceWindowInput"></a>

```java
public MongoClusterMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

---

##### `mongodbVersionInput`<sup>Optional</sup> <a name="mongodbVersionInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersionInput"></a>

```java
public java.lang.String getMongodbVersionInput();
```

- *Type:* java.lang.String

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ramInput"></a>

```java
public java.lang.Number getRamInput();
```

- *Type:* java.lang.Number

---

##### `shardsInput`<sup>Optional</sup> <a name="shardsInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shardsInput"></a>

```java
public java.lang.Number getShardsInput();
```

- *Type:* java.lang.Number

---

##### `storageSizeInput`<sup>Optional</sup> <a name="storageSizeInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSizeInput"></a>

```java
public java.lang.Number getStorageSizeInput();
```

- *Type:* java.lang.Number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateIdInput"></a>

```java
public java.lang.String getTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.instances"></a>

```java
public java.lang.Number getInstances();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mongodbVersion`<sup>Required</sup> <a name="mongodbVersion" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.mongodbVersion"></a>

```java
public java.lang.String getMongodbVersion();
```

- *Type:* java.lang.String

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.ram"></a>

```java
public java.lang.Number getRam();
```

- *Type:* java.lang.Number

---

##### `shards`<sup>Required</sup> <a name="shards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.shards"></a>

```java
public java.lang.Number getShards();
```

- *Type:* java.lang.Number

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MongoClusterBackup <a name="MongoClusterBackup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterBackup;

MongoClusterBackup.builder()
//  .location(java.lang.String)
//  .pointInTimeWindowHours(java.lang.Number)
//  .snapshotIntervalHours(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.location">location</a></code> | <code>java.lang.String</code> | The location where the cluster backups will be stored. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.pointInTimeWindowHours">pointInTimeWindowHours</a></code> | <code>java.lang.Number</code> | Number of hours in the past for which a point-in-time snapshot can be created. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.snapshotIntervalHours">snapshotIntervalHours</a></code> | <code>java.lang.Number</code> | Number of hours between snapshots. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the cluster backups will be stored.

If not set, the backup is stored in the nearest location of the cluster. Examples: de, eu-sounth-2, eu-central-2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#location MongoCluster#location}

---

##### `pointInTimeWindowHours`<sup>Optional</sup> <a name="pointInTimeWindowHours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.pointInTimeWindowHours"></a>

```java
public java.lang.Number getPointInTimeWindowHours();
```

- *Type:* java.lang.Number

Number of hours in the past for which a point-in-time snapshot can be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#point_in_time_window_hours MongoCluster#point_in_time_window_hours}

---

##### `snapshotIntervalHours`<sup>Optional</sup> <a name="snapshotIntervalHours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup.property.snapshotIntervalHours"></a>

```java
public java.lang.Number getSnapshotIntervalHours();
```

- *Type:* java.lang.Number

Number of hours between snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#snapshot_interval_hours MongoCluster#snapshot_interval_hours}

---

### MongoClusterBiConnector <a name="MongoClusterBiConnector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterBiConnector;

MongoClusterBiConnector.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable or disable the BiConnector. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable or disable the BiConnector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#enabled MongoCluster#enabled}

---

### MongoClusterConfig <a name="MongoClusterConfig" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterConfig;

MongoClusterConfig.builder()
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
    .connections(MongoClusterConnections)
    .displayName(java.lang.String)
    .instances(java.lang.Number)
    .location(java.lang.String)
    .mongodbVersion(java.lang.String)
//  .backup(MongoClusterBackup)
//  .biConnector(MongoClusterBiConnector)
//  .cores(java.lang.Number)
//  .edition(java.lang.String)
//  .id(java.lang.String)
//  .maintenanceWindow(MongoClusterMaintenanceWindow)
//  .ram(java.lang.Number)
//  .shards(java.lang.Number)
//  .storageSize(java.lang.Number)
//  .storageType(java.lang.String)
//  .templateId(java.lang.String)
//  .timeouts(MongoClusterTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.instances">instances</a></code> | <code>java.lang.Number</code> | The total number of instances in the cluster (one master and n-1 standbys). |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The physical location where the cluster will be created. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.mongodbVersion">mongodbVersion</a></code> | <code>java.lang.String</code> | The MongoDB version of your cluster. Update forces cluster re-creation. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.biConnector">biConnector</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | bi_connector block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.cores">cores</a></code> | <code>java.lang.Number</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | The cluster edition. Must be one of: playground, business, enterprise. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#id MongoCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.ram">ram</a></code> | <code>java.lang.Number</code> | The amount of memory per instance in megabytes. Multiple of 1024. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.shards">shards</a></code> | <code>java.lang.Number</code> | The total number of shards in the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageSize">storageSize</a></code> | <code>java.lang.Number</code> | The amount of storage per instance in megabytes. At least 5120, at most 2097152. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | The storage type. One of : HDD, SSD, SSD Standard, SSD Premium. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.templateId">templateId</a></code> | <code>java.lang.String</code> | The unique ID of the template, which specifies the number of cores, storage size, and memory. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.type">type</a></code> | <code>java.lang.String</code> | The cluster type, either `replicaset` or `sharded-cluster`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.connections"></a>

```java
public MongoClusterConnections getConnections();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#connections MongoCluster#connections}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#display_name MongoCluster#display_name}

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.instances"></a>

```java
public java.lang.Number getInstances();
```

- *Type:* java.lang.Number

The total number of instances in the cluster (one master and n-1 standbys).

Example: 1, 3, 5, 7. For enterprise edition at least 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#instances MongoCluster#instances}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The physical location where the cluster will be created.

This will be where all of your instances live. Property cannot be modified after datacenter creation (disallowed in update requests). Available locations: de/txl, gb/lhr, es/vit. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#location MongoCluster#location}

---

##### `mongodbVersion`<sup>Required</sup> <a name="mongodbVersion" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.mongodbVersion"></a>

```java
public java.lang.String getMongodbVersion();
```

- *Type:* java.lang.String

The MongoDB version of your cluster. Update forces cluster re-creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#mongodb_version MongoCluster#mongodb_version}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.backup"></a>

```java
public MongoClusterBackup getBackup();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#backup MongoCluster#backup}

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.biConnector"></a>

```java
public MongoClusterBiConnector getBiConnector();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

bi_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#bi_connector MongoCluster#bi_connector}

---

##### `cores`<sup>Optional</sup> <a name="cores" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#cores MongoCluster#cores}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

The cluster edition. Must be one of: playground, business, enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#edition MongoCluster#edition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#id MongoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.maintenanceWindow"></a>

```java
public MongoClusterMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#maintenance_window MongoCluster#maintenance_window}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.ram"></a>

```java
public java.lang.Number getRam();
```

- *Type:* java.lang.Number

The amount of memory per instance in megabytes. Multiple of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#ram MongoCluster#ram}

---

##### `shards`<sup>Optional</sup> <a name="shards" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.shards"></a>

```java
public java.lang.Number getShards();
```

- *Type:* java.lang.Number

The total number of shards in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#shards MongoCluster#shards}

---

##### `storageSize`<sup>Optional</sup> <a name="storageSize" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageSize"></a>

```java
public java.lang.Number getStorageSize();
```

- *Type:* java.lang.Number

The amount of storage per instance in megabytes. At least 5120, at most 2097152.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#storage_size MongoCluster#storage_size}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

The storage type. One of : HDD, SSD, SSD Standard, SSD Premium.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#storage_type MongoCluster#storage_type}

---

##### `templateId`<sup>Optional</sup> <a name="templateId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

The unique ID of the template, which specifies the number of cores, storage size, and memory.

You cannot downgrade to a smaller template or minor edition (e.g. from business to playground). To get a list of all templates to confirm the changes use the /templates endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#template_id MongoCluster#template_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.timeouts"></a>

```java
public MongoClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#timeouts MongoCluster#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The cluster type, either `replicaset` or `sharded-cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#type MongoCluster#type}

---

### MongoClusterConnections <a name="MongoClusterConnections" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterConnections;

MongoClusterConnections.builder()
    .cidrList(java.util.List<java.lang.String>)
    .datacenterId(java.lang.String)
    .lanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | The list of IPs and subnet for your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The datacenter to connect your cluster to. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.lanId">lanId</a></code> | <code>java.lang.String</code> | The LAN to connect your cluster to. |

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.cidrList"></a>

```java
public java.util.List<java.lang.String> getCidrList();
```

- *Type:* java.util.List<java.lang.String>

The list of IPs and subnet for your cluster.

Note the following unavailable IP ranges:10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24. example: [192.168.1.100/24, 192.168.1.101/24]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#cidr_list MongoCluster#cidr_list}

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The datacenter to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#datacenter_id MongoCluster#datacenter_id}

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

The LAN to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#lan_id MongoCluster#lan_id}

---

### MongoClusterMaintenanceWindow <a name="MongoClusterMaintenanceWindow" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterMaintenanceWindow;

MongoClusterMaintenanceWindow.builder()
    .dayOfTheWeek(java.lang.String)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#day_of_the_week MongoCluster#day_of_the_week}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.time">time</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#time MongoCluster#time}. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#day_of_the_week MongoCluster#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#time MongoCluster#time}.

---

### MongoClusterTimeouts <a name="MongoClusterTimeouts" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterTimeouts;

MongoClusterTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#create MongoCluster#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#default MongoCluster#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#delete MongoCluster#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#update MongoCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#create MongoCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#default MongoCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#delete MongoCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.13/docs/resources/mongo_cluster#update MongoCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MongoClusterBackupOutputReference <a name="MongoClusterBackupOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterBackupOutputReference;

new MongoClusterBackupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetPointInTimeWindowHours">resetPointInTimeWindowHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetSnapshotIntervalHours">resetSnapshotIntervalHours</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPointInTimeWindowHours` <a name="resetPointInTimeWindowHours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetPointInTimeWindowHours"></a>

```java
public void resetPointInTimeWindowHours()
```

##### `resetSnapshotIntervalHours` <a name="resetSnapshotIntervalHours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.resetSnapshotIntervalHours"></a>

```java
public void resetSnapshotIntervalHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHoursInput">pointInTimeWindowHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHoursInput">snapshotIntervalHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHours">pointInTimeWindowHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHours">snapshotIntervalHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `pointInTimeWindowHoursInput`<sup>Optional</sup> <a name="pointInTimeWindowHoursInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHoursInput"></a>

```java
public java.lang.Number getPointInTimeWindowHoursInput();
```

- *Type:* java.lang.Number

---

##### `snapshotIntervalHoursInput`<sup>Optional</sup> <a name="snapshotIntervalHoursInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHoursInput"></a>

```java
public java.lang.Number getSnapshotIntervalHoursInput();
```

- *Type:* java.lang.Number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `pointInTimeWindowHours`<sup>Required</sup> <a name="pointInTimeWindowHours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.pointInTimeWindowHours"></a>

```java
public java.lang.Number getPointInTimeWindowHours();
```

- *Type:* java.lang.Number

---

##### `snapshotIntervalHours`<sup>Required</sup> <a name="snapshotIntervalHours" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.snapshotIntervalHours"></a>

```java
public java.lang.Number getSnapshotIntervalHours();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackupOutputReference.property.internalValue"></a>

```java
public MongoClusterBackup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBackup">MongoClusterBackup</a>

---


### MongoClusterBiConnectorOutputReference <a name="MongoClusterBiConnectorOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterBiConnectorOutputReference;

new MongoClusterBiConnectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnectorOutputReference.property.internalValue"></a>

```java
public MongoClusterBiConnector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterBiConnector">MongoClusterBiConnector</a>

---


### MongoClusterConnectionsOutputReference <a name="MongoClusterConnectionsOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterConnectionsOutputReference;

new MongoClusterConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrListInput">cidrListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanIdInput">lanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanId">lanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrListInput`<sup>Optional</sup> <a name="cidrListInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrListInput"></a>

```java
public java.util.List<java.lang.String> getCidrListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanIdInput"></a>

```java
public java.lang.String getLanIdInput();
```

- *Type:* java.lang.String

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.cidrList"></a>

```java
public java.util.List<java.lang.String> getCidrList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnectionsOutputReference.property.internalValue"></a>

```java
public MongoClusterConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterConnections">MongoClusterConnections</a>

---


### MongoClusterMaintenanceWindowOutputReference <a name="MongoClusterMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterMaintenanceWindowOutputReference;

new MongoClusterMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```java
public java.lang.String getDayOfTheWeekInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public MongoClusterMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterMaintenanceWindow">MongoClusterMaintenanceWindow</a>

---


### MongoClusterTimeoutsOutputReference <a name="MongoClusterTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.mongo_cluster.MongoClusterTimeoutsOutputReference;

new MongoClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---



