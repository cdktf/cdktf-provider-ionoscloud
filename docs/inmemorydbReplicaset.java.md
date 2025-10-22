# `inmemorydbReplicaset` Submodule <a name="`inmemorydbReplicaset` Submodule" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InmemorydbReplicaset <a name="InmemorydbReplicaset" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset ionoscloud_inmemorydb_replicaset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicaset;

InmemorydbReplicaset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connections(InmemorydbReplicasetConnections)
    .credentials(InmemorydbReplicasetCredentials)
    .displayName(java.lang.String)
    .evictionPolicy(java.lang.String)
    .persistenceMode(java.lang.String)
    .replicas(java.lang.Number)
    .resources(InmemorydbReplicasetResources)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .initialSnapshotId(java.lang.String)
//  .location(java.lang.String)
//  .maintenanceWindow(InmemorydbReplicasetMaintenanceWindow)
//  .timeouts(InmemorydbReplicasetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | The eviction policy for the replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.persistenceMode">persistenceMode</a></code> | <code>java.lang.String</code> | Specifies How and If data is persisted. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.replicas">replicas</a></code> | <code>java.lang.Number</code> | The total number of replicas in the replica set (one active and n-1 passive). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.resources">resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The InMemoryDB version of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.initialSnapshotId">initialSnapshotId</a></code> | <code>java.lang.String</code> | The ID of a snapshot to restore the replica set from. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The replica set location. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#connections InmemorydbReplicaset#connections}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#credentials InmemorydbReplicaset#credentials}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human readable name of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#display_name InmemorydbReplicaset#display_name}

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.evictionPolicy"></a>

- *Type:* java.lang.String

The eviction policy for the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#eviction_policy InmemorydbReplicaset#eviction_policy}

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.persistenceMode"></a>

- *Type:* java.lang.String

Specifies How and If data is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#persistence_mode InmemorydbReplicaset#persistence_mode}

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.replicas"></a>

- *Type:* java.lang.Number

The total number of replicas in the replica set (one active and n-1 passive).

In case of a standalone instance, the value is 1. In all other cases, the value is > 1. The replicas will not be available as read replicas, they are only standby for a failure of the active instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#replicas InmemorydbReplicaset#replicas}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.resources"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#resources InmemorydbReplicaset#resources}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The InMemoryDB version of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#version InmemorydbReplicaset#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialSnapshotId`<sup>Optional</sup> <a name="initialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.initialSnapshotId"></a>

- *Type:* java.lang.String

The ID of a snapshot to restore the replica set from.

If set, the replica set will be created from the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#initial_snapshot_id InmemorydbReplicaset#initial_snapshot_id}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The replica set location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#location InmemorydbReplicaset#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#maintenance_window InmemorydbReplicaset#maintenance_window}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#timeouts InmemorydbReplicaset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId">resetInitialSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnections` <a name="putConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections"></a>

```java
public void putConnections(InmemorydbReplicasetConnections value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials"></a>

```java
public void putCredentials(InmemorydbReplicasetCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(InmemorydbReplicasetMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources"></a>

```java
public void putResources(InmemorydbReplicasetResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts"></a>

```java
public void putTimeouts(InmemorydbReplicasetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId"></a>

```java
public void resetId()
```

##### `resetInitialSnapshotId` <a name="resetInitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId"></a>

```java
public void resetInitialSnapshotId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicaset;

InmemorydbReplicaset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicaset;

InmemorydbReplicaset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicaset;

InmemorydbReplicaset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicaset;

InmemorydbReplicaset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InmemorydbReplicaset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InmemorydbReplicaset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InmemorydbReplicaset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the InmemorydbReplicaset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput">connectionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput">initialSnapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput">persistenceModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput">replicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId">initialSnapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode">persistenceMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections"></a>

```java
public InmemorydbReplicasetConnectionsOutputReference getConnections();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials"></a>

```java
public InmemorydbReplicasetCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow"></a>

```java
public InmemorydbReplicasetMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources"></a>

```java
public InmemorydbReplicasetResourcesOutputReference getResources();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts"></a>

```java
public InmemorydbReplicasetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput"></a>

```java
public InmemorydbReplicasetConnections getConnectionsInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput"></a>

```java
public InmemorydbReplicasetCredentials getCredentialsInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput"></a>

```java
public java.lang.String getEvictionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialSnapshotIdInput`<sup>Optional</sup> <a name="initialSnapshotIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput"></a>

```java
public java.lang.String getInitialSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput"></a>

```java
public InmemorydbReplicasetMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `persistenceModeInput`<sup>Optional</sup> <a name="persistenceModeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput"></a>

```java
public java.lang.String getPersistenceModeInput();
```

- *Type:* java.lang.String

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput"></a>

```java
public java.lang.Number getReplicasInput();
```

- *Type:* java.lang.Number

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput"></a>

```java
public InmemorydbReplicasetResources getResourcesInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput"></a>

```java
public IResolvable|InmemorydbReplicasetTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialSnapshotId`<sup>Required</sup> <a name="initialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId"></a>

```java
public java.lang.String getInitialSnapshotId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode"></a>

```java
public java.lang.String getPersistenceMode();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InmemorydbReplicasetConfig <a name="InmemorydbReplicasetConfig" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetConfig;

InmemorydbReplicasetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connections(InmemorydbReplicasetConnections)
    .credentials(InmemorydbReplicasetCredentials)
    .displayName(java.lang.String)
    .evictionPolicy(java.lang.String)
    .persistenceMode(java.lang.String)
    .replicas(java.lang.Number)
    .resources(InmemorydbReplicasetResources)
    .version(java.lang.String)
//  .id(java.lang.String)
//  .initialSnapshotId(java.lang.String)
//  .location(java.lang.String)
//  .maintenanceWindow(InmemorydbReplicasetMaintenanceWindow)
//  .timeouts(InmemorydbReplicasetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human readable name of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | The eviction policy for the replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode">persistenceMode</a></code> | <code>java.lang.String</code> | Specifies How and If data is persisted. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas">replicas</a></code> | <code>java.lang.Number</code> | The total number of replicas in the replica set (one active and n-1 passive). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version">version</a></code> | <code>java.lang.String</code> | The InMemoryDB version of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId">initialSnapshotId</a></code> | <code>java.lang.String</code> | The ID of a snapshot to restore the replica set from. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location">location</a></code> | <code>java.lang.String</code> | The replica set location. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections"></a>

```java
public InmemorydbReplicasetConnections getConnections();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#connections InmemorydbReplicaset#connections}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials"></a>

```java
public InmemorydbReplicasetCredentials getCredentials();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#credentials InmemorydbReplicaset#credentials}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human readable name of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#display_name InmemorydbReplicaset#display_name}

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

The eviction policy for the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#eviction_policy InmemorydbReplicaset#eviction_policy}

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode"></a>

```java
public java.lang.String getPersistenceMode();
```

- *Type:* java.lang.String

Specifies How and If data is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#persistence_mode InmemorydbReplicaset#persistence_mode}

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas"></a>

```java
public java.lang.Number getReplicas();
```

- *Type:* java.lang.Number

The total number of replicas in the replica set (one active and n-1 passive).

In case of a standalone instance, the value is 1. In all other cases, the value is > 1. The replicas will not be available as read replicas, they are only standby for a failure of the active instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#replicas InmemorydbReplicaset#replicas}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources"></a>

```java
public InmemorydbReplicasetResources getResources();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#resources InmemorydbReplicaset#resources}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The InMemoryDB version of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#version InmemorydbReplicaset#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialSnapshotId`<sup>Optional</sup> <a name="initialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId"></a>

```java
public java.lang.String getInitialSnapshotId();
```

- *Type:* java.lang.String

The ID of a snapshot to restore the replica set from.

If set, the replica set will be created from the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#initial_snapshot_id InmemorydbReplicaset#initial_snapshot_id}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The replica set location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#location InmemorydbReplicaset#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow"></a>

```java
public InmemorydbReplicasetMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#maintenance_window InmemorydbReplicaset#maintenance_window}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts"></a>

```java
public InmemorydbReplicasetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#timeouts InmemorydbReplicaset#timeouts}

---

### InmemorydbReplicasetConnections <a name="InmemorydbReplicasetConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetConnections;

InmemorydbReplicasetConnections.builder()
    .cidr(java.lang.String)
    .datacenterId(java.lang.String)
    .lanId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr">cidr</a></code> | <code>java.lang.String</code> | The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The datacenter to connect your instance to. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId">lanId</a></code> | <code>java.lang.String</code> | The numeric LAN ID to connect your instance to. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#cidr InmemorydbReplicaset#cidr}

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The datacenter to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#datacenter_id InmemorydbReplicaset#datacenter_id}

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

The numeric LAN ID to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#lan_id InmemorydbReplicaset#lan_id}

---

### InmemorydbReplicasetCredentials <a name="InmemorydbReplicasetCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetCredentials;

InmemorydbReplicasetCredentials.builder()
    .username(java.lang.String)
//  .hashedPassword(InmemorydbReplicasetCredentialsHashedPassword)
//  .plainTextPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username">username</a></code> | <code>java.lang.String</code> | The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby'). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword">hashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | hashed_password block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword">plainTextPassword</a></code> | <code>java.lang.String</code> | The password for a InMemoryDB user. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#username InmemorydbReplicaset#username}

---

##### `hashedPassword`<sup>Optional</sup> <a name="hashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword"></a>

```java
public InmemorydbReplicasetCredentialsHashedPassword getHashedPassword();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

hashed_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#hashed_password InmemorydbReplicaset#hashed_password}

---

##### `plainTextPassword`<sup>Optional</sup> <a name="plainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword"></a>

```java
public java.lang.String getPlainTextPassword();
```

- *Type:* java.lang.String

The password for a InMemoryDB user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#plain_text_password InmemorydbReplicaset#plain_text_password}

---

### InmemorydbReplicasetCredentialsHashedPassword <a name="InmemorydbReplicasetCredentialsHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetCredentialsHashedPassword;

InmemorydbReplicasetCredentialsHashedPassword.builder()
    .algorithm(java.lang.String)
    .hash(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash">hash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}.

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}.

---

### InmemorydbReplicasetMaintenanceWindow <a name="InmemorydbReplicasetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetMaintenanceWindow;

InmemorydbReplicasetMaintenanceWindow.builder()
    .dayOfTheWeek(java.lang.String)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time">time</a></code> | <code>java.lang.String</code> | Start of the maintenance window in UTC time. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#day_of_the_week InmemorydbReplicaset#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#time InmemorydbReplicaset#time}

---

### InmemorydbReplicasetResources <a name="InmemorydbReplicasetResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetResources;

InmemorydbReplicasetResources.builder()
    .cores(java.lang.Number)
    .ram(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores">cores</a></code> | <code>java.lang.Number</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram">ram</a></code> | <code>java.lang.Number</code> | The amount of memory per instance in gigabytes (GB). |

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#cores InmemorydbReplicaset#cores}

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram"></a>

```java
public java.lang.Number getRam();
```

- *Type:* java.lang.Number

The amount of memory per instance in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#ram InmemorydbReplicaset#ram}

---

### InmemorydbReplicasetTimeouts <a name="InmemorydbReplicasetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetTimeouts;

InmemorydbReplicasetTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.17/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InmemorydbReplicasetConnectionsOutputReference <a name="InmemorydbReplicasetConnectionsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetConnectionsOutputReference;

new InmemorydbReplicasetConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput">lanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId">lanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput"></a>

```java
public java.lang.String getLanIdInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue"></a>

```java
public InmemorydbReplicasetConnections getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---


### InmemorydbReplicasetCredentialsHashedPasswordOutputReference <a name="InmemorydbReplicasetCredentialsHashedPasswordOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference;

new InmemorydbReplicasetCredentialsHashedPasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput">hashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash">hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput"></a>

```java
public java.lang.String getHashInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue"></a>

```java
public InmemorydbReplicasetCredentialsHashedPassword getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---


### InmemorydbReplicasetCredentialsOutputReference <a name="InmemorydbReplicasetCredentialsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetCredentialsOutputReference;

new InmemorydbReplicasetCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword">putHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword">resetHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword">resetPlainTextPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHashedPassword` <a name="putHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword"></a>

```java
public void putHashedPassword(InmemorydbReplicasetCredentialsHashedPassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `resetHashedPassword` <a name="resetHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword"></a>

```java
public void resetHashedPassword()
```

##### `resetPlainTextPassword` <a name="resetPlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword"></a>

```java
public void resetPlainTextPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword">hashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput">hashedPasswordInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput">plainTextPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword">plainTextPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hashedPassword`<sup>Required</sup> <a name="hashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword"></a>

```java
public InmemorydbReplicasetCredentialsHashedPasswordOutputReference getHashedPassword();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a>

---

##### `hashedPasswordInput`<sup>Optional</sup> <a name="hashedPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput"></a>

```java
public InmemorydbReplicasetCredentialsHashedPassword getHashedPasswordInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `plainTextPasswordInput`<sup>Optional</sup> <a name="plainTextPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput"></a>

```java
public java.lang.String getPlainTextPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `plainTextPassword`<sup>Required</sup> <a name="plainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword"></a>

```java
public java.lang.String getPlainTextPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue"></a>

```java
public InmemorydbReplicasetCredentials getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---


### InmemorydbReplicasetMaintenanceWindowOutputReference <a name="InmemorydbReplicasetMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetMaintenanceWindowOutputReference;

new InmemorydbReplicasetMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```java
public java.lang.String getDayOfTheWeekInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public InmemorydbReplicasetMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---


### InmemorydbReplicasetResourcesOutputReference <a name="InmemorydbReplicasetResourcesOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetResourcesOutputReference;

new InmemorydbReplicasetResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage">storage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput">coresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput">ramInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores">cores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram">ram</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage"></a>

```java
public java.lang.Number getStorage();
```

- *Type:* java.lang.Number

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput"></a>

```java
public java.lang.Number getCoresInput();
```

- *Type:* java.lang.Number

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput"></a>

```java
public java.lang.Number getRamInput();
```

- *Type:* java.lang.Number

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram"></a>

```java
public java.lang.Number getRam();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue"></a>

```java
public InmemorydbReplicasetResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---


### InmemorydbReplicasetTimeoutsOutputReference <a name="InmemorydbReplicasetTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.inmemorydb_replicaset.InmemorydbReplicasetTimeoutsOutputReference;

new InmemorydbReplicasetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|InmemorydbReplicasetTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---



