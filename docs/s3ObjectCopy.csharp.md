# `s3ObjectCopy` Submodule <a name="`s3ObjectCopy` Submodule" id="@cdktf/provider-ionoscloud.s3ObjectCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ObjectCopy <a name="S3ObjectCopy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy ionoscloud_s3_object_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3ObjectCopy(Construct Scope, string Id, S3ObjectCopyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig">S3ObjectCopyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl">ResetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage">ResetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch">ResetCopyIfMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince">ResetCopyIfModifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch">ResetCopyIfNoneMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince">ResetCopyIfUnmodifiedSince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires">ResetExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective">ResetMetadataDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold">ResetObjectLockLegalHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode">ResetObjectLockMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate">ResetObjectLockRetainUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm">ResetServerSideEncryptionCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey">ResetServerSideEncryptionCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5">ResetServerSideEncryptionCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm">ResetSourceCustomerAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey">ResetSourceCustomerKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5">ResetSourceCustomerKeyMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass">ResetStorageClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective">ResetTaggingDirective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect">ResetWebsiteRedirect</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCacheControl` <a name="ResetCacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCacheControl"></a>

```csharp
private void ResetCacheControl()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentLanguage` <a name="ResetContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentLanguage"></a>

```csharp
private void ResetContentLanguage()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCopyIfMatch` <a name="ResetCopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfMatch"></a>

```csharp
private void ResetCopyIfMatch()
```

##### `ResetCopyIfModifiedSince` <a name="ResetCopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfModifiedSince"></a>

```csharp
private void ResetCopyIfModifiedSince()
```

##### `ResetCopyIfNoneMatch` <a name="ResetCopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfNoneMatch"></a>

```csharp
private void ResetCopyIfNoneMatch()
```

##### `ResetCopyIfUnmodifiedSince` <a name="ResetCopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetCopyIfUnmodifiedSince"></a>

```csharp
private void ResetCopyIfUnmodifiedSince()
```

##### `ResetExpires` <a name="ResetExpires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetExpires"></a>

```csharp
private void ResetExpires()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataDirective` <a name="ResetMetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetMetadataDirective"></a>

```csharp
private void ResetMetadataDirective()
```

##### `ResetObjectLockLegalHold` <a name="ResetObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockLegalHold"></a>

```csharp
private void ResetObjectLockLegalHold()
```

##### `ResetObjectLockMode` <a name="ResetObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockMode"></a>

```csharp
private void ResetObjectLockMode()
```

##### `ResetObjectLockRetainUntilDate` <a name="ResetObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetObjectLockRetainUntilDate"></a>

```csharp
private void ResetObjectLockRetainUntilDate()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryption"></a>

```csharp
private void ResetServerSideEncryption()
```

##### `ResetServerSideEncryptionCustomerAlgorithm` <a name="ResetServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerAlgorithm"></a>

```csharp
private void ResetServerSideEncryptionCustomerAlgorithm()
```

##### `ResetServerSideEncryptionCustomerKey` <a name="ResetServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKey"></a>

```csharp
private void ResetServerSideEncryptionCustomerKey()
```

##### `ResetServerSideEncryptionCustomerKeyMd5` <a name="ResetServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetServerSideEncryptionCustomerKeyMd5"></a>

```csharp
private void ResetServerSideEncryptionCustomerKeyMd5()
```

##### `ResetSourceCustomerAlgorithm` <a name="ResetSourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerAlgorithm"></a>

```csharp
private void ResetSourceCustomerAlgorithm()
```

##### `ResetSourceCustomerKey` <a name="ResetSourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKey"></a>

```csharp
private void ResetSourceCustomerKey()
```

##### `ResetSourceCustomerKeyMd5` <a name="ResetSourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetSourceCustomerKeyMd5"></a>

```csharp
private void ResetSourceCustomerKeyMd5()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```

##### `ResetTaggingDirective` <a name="ResetTaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTaggingDirective"></a>

```csharp
private void ResetTaggingDirective()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWebsiteRedirect` <a name="ResetWebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.resetWebsiteRedirect"></a>

```csharp
private void ResetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3ObjectCopy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3ObjectCopy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3ObjectCopy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3ObjectCopy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a S3ObjectCopy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ObjectCopy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ObjectCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the S3ObjectCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput">CacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput">ContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput">CopyIfMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput">CopyIfModifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput">CopyIfNoneMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput">CopyIfUnmodifiedSinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput">ExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput">MetadataDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput">ObjectLockLegalHoldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput">ObjectLockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput">ObjectLockRetainUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput">ServerSideEncryptionCustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput">ServerSideEncryptionCustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input">ServerSideEncryptionCustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput">SourceCustomerAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput">SourceCustomerKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input">SourceCustomerKeyMd5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput">TaggingDirectiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput">WebsiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch">CopyIfMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires">Expires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective">MetadataDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold">ObjectLockLegalHold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm">ServerSideEncryptionCustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey">ServerSideEncryptionCustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5">ServerSideEncryptionCustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective">TaggingDirective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CacheControlInput`<sup>Optional</sup> <a name="CacheControlInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControlInput"></a>

```csharp
public string CacheControlInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentLanguageInput`<sup>Optional</sup> <a name="ContentLanguageInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguageInput"></a>

```csharp
public string ContentLanguageInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CopyIfMatchInput`<sup>Optional</sup> <a name="CopyIfMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatchInput"></a>

```csharp
public string CopyIfMatchInput { get; }
```

- *Type:* string

---

##### `CopyIfModifiedSinceInput`<sup>Optional</sup> <a name="CopyIfModifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSinceInput"></a>

```csharp
public string CopyIfModifiedSinceInput { get; }
```

- *Type:* string

---

##### `CopyIfNoneMatchInput`<sup>Optional</sup> <a name="CopyIfNoneMatchInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatchInput"></a>

```csharp
public string CopyIfNoneMatchInput { get; }
```

- *Type:* string

---

##### `CopyIfUnmodifiedSinceInput`<sup>Optional</sup> <a name="CopyIfUnmodifiedSinceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSinceInput"></a>

```csharp
public string CopyIfUnmodifiedSinceInput { get; }
```

- *Type:* string

---

##### `ExpiresInput`<sup>Optional</sup> <a name="ExpiresInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expiresInput"></a>

```csharp
public string ExpiresInput { get; }
```

- *Type:* string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MetadataDirectiveInput`<sup>Optional</sup> <a name="MetadataDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirectiveInput"></a>

```csharp
public string MetadataDirectiveInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ObjectLockLegalHoldInput`<sup>Optional</sup> <a name="ObjectLockLegalHoldInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHoldInput"></a>

```csharp
public string ObjectLockLegalHoldInput { get; }
```

- *Type:* string

---

##### `ObjectLockModeInput`<sup>Optional</sup> <a name="ObjectLockModeInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockModeInput"></a>

```csharp
public string ObjectLockModeInput { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDateInput`<sup>Optional</sup> <a name="ObjectLockRetainUntilDateInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDateInput"></a>

```csharp
public string ObjectLockRetainUntilDateInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionCustomerAlgorithmInput`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithmInput"></a>

```csharp
public string ServerSideEncryptionCustomerAlgorithmInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionCustomerKeyInput`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyInput"></a>

```csharp
public string ServerSideEncryptionCustomerKeyInput { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionCustomerKeyMd5Input`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5Input"></a>

```csharp
public string ServerSideEncryptionCustomerKeyMd5Input { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionInput"></a>

```csharp
public string ServerSideEncryptionInput { get; }
```

- *Type:* string

---

##### `SourceCustomerAlgorithmInput`<sup>Optional</sup> <a name="SourceCustomerAlgorithmInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithmInput"></a>

```csharp
public string SourceCustomerAlgorithmInput { get; }
```

- *Type:* string

---

##### `SourceCustomerKeyInput`<sup>Optional</sup> <a name="SourceCustomerKeyInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyInput"></a>

```csharp
public string SourceCustomerKeyInput { get; }
```

- *Type:* string

---

##### `SourceCustomerKeyMd5Input`<sup>Optional</sup> <a name="SourceCustomerKeyMd5Input" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5Input"></a>

```csharp
public string SourceCustomerKeyMd5Input { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `TaggingDirectiveInput`<sup>Optional</sup> <a name="TaggingDirectiveInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirectiveInput"></a>

```csharp
public string TaggingDirectiveInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirectInput`<sup>Optional</sup> <a name="WebsiteRedirectInput" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirectInput"></a>

```csharp
public string WebsiteRedirectInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CopyIfMatch`<sup>Required</sup> <a name="CopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfMatch"></a>

```csharp
public string CopyIfMatch { get; }
```

- *Type:* string

---

##### `CopyIfModifiedSince`<sup>Required</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfModifiedSince"></a>

```csharp
public string CopyIfModifiedSince { get; }
```

- *Type:* string

---

##### `CopyIfNoneMatch`<sup>Required</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfNoneMatch"></a>

```csharp
public string CopyIfNoneMatch { get; }
```

- *Type:* string

---

##### `CopyIfUnmodifiedSince`<sup>Required</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.copyIfUnmodifiedSince"></a>

```csharp
public string CopyIfUnmodifiedSince { get; }
```

- *Type:* string

---

##### `Expires`<sup>Required</sup> <a name="Expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.expires"></a>

```csharp
public string Expires { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataDirective`<sup>Required</sup> <a name="MetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.metadataDirective"></a>

```csharp
public string MetadataDirective { get; }
```

- *Type:* string

---

##### `ObjectLockLegalHold`<sup>Required</sup> <a name="ObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockLegalHold"></a>

```csharp
public string ObjectLockLegalHold { get; }
```

- *Type:* string

---

##### `ObjectLockMode`<sup>Required</sup> <a name="ObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; }
```

- *Type:* string

---

##### `ObjectLockRetainUntilDate`<sup>Required</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; }
```

- *Type:* string

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionCustomerAlgorithm`<sup>Required</sup> <a name="ServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerAlgorithm"></a>

```csharp
public string ServerSideEncryptionCustomerAlgorithm { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionCustomerKey`<sup>Required</sup> <a name="ServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKey"></a>

```csharp
public string ServerSideEncryptionCustomerKey { get; }
```

- *Type:* string

---

##### `ServerSideEncryptionCustomerKeyMd5`<sup>Required</sup> <a name="ServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.serverSideEncryptionCustomerKeyMd5"></a>

```csharp
public string ServerSideEncryptionCustomerKeyMd5 { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceCustomerAlgorithm`<sup>Required</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerAlgorithm"></a>

```csharp
public string SourceCustomerAlgorithm { get; }
```

- *Type:* string

---

##### `SourceCustomerKey`<sup>Required</sup> <a name="SourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKey"></a>

```csharp
public string SourceCustomerKey { get; }
```

- *Type:* string

---

##### `SourceCustomerKeyMd5`<sup>Required</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.sourceCustomerKeyMd5"></a>

```csharp
public string SourceCustomerKeyMd5 { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `TaggingDirective`<sup>Required</sup> <a name="TaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.taggingDirective"></a>

```csharp
public string TaggingDirective { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteRedirect`<sup>Required</sup> <a name="WebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ObjectCopyConfig <a name="S3ObjectCopyConfig" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3ObjectCopyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string Key,
    string Source,
    string CacheControl = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentLanguage = null,
    string ContentType = null,
    string CopyIfMatch = null,
    string CopyIfModifiedSince = null,
    string CopyIfNoneMatch = null,
    string CopyIfUnmodifiedSince = null,
    string Expires = null,
    bool|IResolvable ForceDestroy = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MetadataDirective = null,
    string ObjectLockLegalHold = null,
    string ObjectLockMode = null,
    string ObjectLockRetainUntilDate = null,
    string ServerSideEncryption = null,
    string ServerSideEncryptionCustomerAlgorithm = null,
    string ServerSideEncryptionCustomerKey = null,
    string ServerSideEncryptionCustomerKeyMd5 = null,
    string SourceCustomerAlgorithm = null,
    string SourceCustomerKey = null,
    string SourceCustomerKeyMd5 = null,
    string StorageClass = null,
    string TaggingDirective = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string WebsiteRedirect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key">Key</a></code> | <code>string</code> | The key of the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source">Source</a></code> | <code>string</code> | The key of the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl">CacheControl</a></code> | <code>string</code> | Can be used to specify caching behavior along the request/reply chain. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Specifies presentational information for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | The natural language or languages of the intended audience for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType">ContentType</a></code> | <code>string</code> | A standard MIME type describing the format of the contents. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch">CopyIfMatch</a></code> | <code>string</code> | Copies the object if its entity tag (ETag) matches the specified tag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince">CopyIfModifiedSince</a></code> | <code>string</code> | Copies the object if it has been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch">CopyIfNoneMatch</a></code> | <code>string</code> | Copies the object if its entity tag (ETag) is different than the specified ETag. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince">CopyIfUnmodifiedSince</a></code> | <code>string</code> | Copies the object if it hasn't been modified since the specified time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires">Expires</a></code> | <code>string</code> | The date and time at which the object copy is no longer cacheable. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective">MetadataDirective</a></code> | <code>string</code> | Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold">ObjectLockLegalHold</a></code> | <code>string</code> | Specifies whether a legal hold will be applied to this object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode">ObjectLockMode</a></code> | <code>string</code> | Confirms that the requester knows that they will be charged for the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate">ObjectLockRetainUntilDate</a></code> | <code>string</code> | The date and time when you want this object copy's Object Copy Lock to expire. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code>string</code> | The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm">ServerSideEncryptionCustomerAlgorithm</a></code> | <code>string</code> | Specifies the algorithm to use to when encrypting the object copy (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey">ServerSideEncryptionCustomerKey</a></code> | <code>string</code> | Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5">ServerSideEncryptionCustomerKeyMd5</a></code> | <code>string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm">SourceCustomerAlgorithm</a></code> | <code>string</code> | Specifies the algorithm to use to when decrypting the source object (e.g., AES256). |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey">SourceCustomerKey</a></code> | <code>string</code> | Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5">SourceCustomerKeyMd5</a></code> | <code>string</code> | Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass">StorageClass</a></code> | <code>string</code> | The storage class of the object copy. Valid value is 'STANDARD'. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective">TaggingDirective</a></code> | <code>string</code> | Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tag-set for the object copy. |
| <code><a href="#@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect">WebsiteRedirect</a></code> | <code>string</code> | If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#bucket S3ObjectCopy#bucket}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#key S3ObjectCopy#key}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The key of the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#source S3ObjectCopy#source}

---

##### `CacheControl`<sup>Optional</sup> <a name="CacheControl" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.cacheControl"></a>

```csharp
public string CacheControl { get; set; }
```

- *Type:* string

Can be used to specify caching behavior along the request/reply chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#cache_control S3ObjectCopy#cache_control}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Specifies presentational information for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#content_disposition S3ObjectCopy#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Specifies what content encodings have been applied to the object copy and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#content_encoding S3ObjectCopy#content_encoding}

---

##### `ContentLanguage`<sup>Optional</sup> <a name="ContentLanguage" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; set; }
```

- *Type:* string

The natural language or languages of the intended audience for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#content_language S3ObjectCopy#content_language}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

A standard MIME type describing the format of the contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#content_type S3ObjectCopy#content_type}

---

##### `CopyIfMatch`<sup>Optional</sup> <a name="CopyIfMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfMatch"></a>

```csharp
public string CopyIfMatch { get; set; }
```

- *Type:* string

Copies the object if its entity tag (ETag) matches the specified tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#copy_if_match S3ObjectCopy#copy_if_match}

---

##### `CopyIfModifiedSince`<sup>Optional</sup> <a name="CopyIfModifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfModifiedSince"></a>

```csharp
public string CopyIfModifiedSince { get; set; }
```

- *Type:* string

Copies the object if it has been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#copy_if_modified_since S3ObjectCopy#copy_if_modified_since}

---

##### `CopyIfNoneMatch`<sup>Optional</sup> <a name="CopyIfNoneMatch" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfNoneMatch"></a>

```csharp
public string CopyIfNoneMatch { get; set; }
```

- *Type:* string

Copies the object if its entity tag (ETag) is different than the specified ETag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#copy_if_none_match S3ObjectCopy#copy_if_none_match}

---

##### `CopyIfUnmodifiedSince`<sup>Optional</sup> <a name="CopyIfUnmodifiedSince" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.copyIfUnmodifiedSince"></a>

```csharp
public string CopyIfUnmodifiedSince { get; set; }
```

- *Type:* string

Copies the object if it hasn't been modified since the specified time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#copy_if_unmodified_since S3ObjectCopy#copy_if_unmodified_since}

---

##### `Expires`<sup>Optional</sup> <a name="Expires" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.expires"></a>

```csharp
public string Expires { get; set; }
```

- *Type:* string

The date and time at which the object copy is no longer cacheable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#expires S3ObjectCopy#expires}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Specifies whether to delete the object copy even if it has a governance-type Object Copy Lock in place.

You must explicitly pass a value of true for this parameter to delete the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#force_destroy S3ObjectCopy#force_destroy}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of metadata to store with the object copy in IONOS Object Storage Object Copy Storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#metadata S3ObjectCopy#metadata}

---

##### `MetadataDirective`<sup>Optional</sup> <a name="MetadataDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.metadataDirective"></a>

```csharp
public string MetadataDirective { get; set; }
```

- *Type:* string

Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#metadata_directive S3ObjectCopy#metadata_directive}

---

##### `ObjectLockLegalHold`<sup>Optional</sup> <a name="ObjectLockLegalHold" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockLegalHold"></a>

```csharp
public string ObjectLockLegalHold { get; set; }
```

- *Type:* string

Specifies whether a legal hold will be applied to this object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#object_lock_legal_hold S3ObjectCopy#object_lock_legal_hold}

---

##### `ObjectLockMode`<sup>Optional</sup> <a name="ObjectLockMode" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockMode"></a>

```csharp
public string ObjectLockMode { get; set; }
```

- *Type:* string

Confirms that the requester knows that they will be charged for the request.

Bucket owners need not specify this parameter in their requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#object_lock_mode S3ObjectCopy#object_lock_mode}

---

##### `ObjectLockRetainUntilDate`<sup>Optional</sup> <a name="ObjectLockRetainUntilDate" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.objectLockRetainUntilDate"></a>

```csharp
public string ObjectLockRetainUntilDate { get; set; }
```

- *Type:* string

The date and time when you want this object copy's Object Copy Lock to expire.

Must be formatted as a timestamp parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#object_lock_retain_until_date S3ObjectCopy#object_lock_retain_until_date}

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryption"></a>

```csharp
public string ServerSideEncryption { get; set; }
```

- *Type:* string

The server-side encryption algorithm used when storing this object copy in IONOS Object Storage Object Copy Storage (AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#server_side_encryption S3ObjectCopy#server_side_encryption}

---

##### `ServerSideEncryptionCustomerAlgorithm`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerAlgorithm"></a>

```csharp
public string ServerSideEncryptionCustomerAlgorithm { get; set; }
```

- *Type:* string

Specifies the algorithm to use to when encrypting the object copy (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#server_side_encryption_customer_algorithm S3ObjectCopy#server_side_encryption_customer_algorithm}

---

##### `ServerSideEncryptionCustomerKey`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKey"></a>

```csharp
public string ServerSideEncryptionCustomerKey { get; set; }
```

- *Type:* string

Specifies the 256-bit, base64-encoded encryption key to use to encrypt and decrypt your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#server_side_encryption_customer_key S3ObjectCopy#server_side_encryption_customer_key}

---

##### `ServerSideEncryptionCustomerKeyMd5`<sup>Optional</sup> <a name="ServerSideEncryptionCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.serverSideEncryptionCustomerKeyMd5"></a>

```csharp
public string ServerSideEncryptionCustomerKeyMd5 { get; set; }
```

- *Type:* string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#server_side_encryption_customer_key_md5 S3ObjectCopy#server_side_encryption_customer_key_md5}

---

##### `SourceCustomerAlgorithm`<sup>Optional</sup> <a name="SourceCustomerAlgorithm" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerAlgorithm"></a>

```csharp
public string SourceCustomerAlgorithm { get; set; }
```

- *Type:* string

Specifies the algorithm to use to when decrypting the source object (e.g., AES256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#source_customer_algorithm S3ObjectCopy#source_customer_algorithm}

---

##### `SourceCustomerKey`<sup>Optional</sup> <a name="SourceCustomerKey" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKey"></a>

```csharp
public string SourceCustomerKey { get; set; }
```

- *Type:* string

Specifies the 256-bit, base64-encoded encryption key to use to decrypt the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#source_customer_key S3ObjectCopy#source_customer_key}

---

##### `SourceCustomerKeyMd5`<sup>Optional</sup> <a name="SourceCustomerKeyMd5" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.sourceCustomerKeyMd5"></a>

```csharp
public string SourceCustomerKeyMd5 { get; set; }
```

- *Type:* string

Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321.

IONOS Object Storage Object Copy Storage uses this header for a message integrity check  to ensure that the encryption key was transmitted without error

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#source_customer_key_md5 S3ObjectCopy#source_customer_key_md5}

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The storage class of the object copy. Valid value is 'STANDARD'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#storage_class S3ObjectCopy#storage_class}

---

##### `TaggingDirective`<sup>Optional</sup> <a name="TaggingDirective" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.taggingDirective"></a>

```csharp
public string TaggingDirective { get; set; }
```

- *Type:* string

Specifies whether the object copy tag-set is copied from the source object or replaced with tag-set provided in the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#tagging_directive S3ObjectCopy#tagging_directive}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tag-set for the object copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#tags S3ObjectCopy#tags}

---

##### `WebsiteRedirect`<sup>Optional</sup> <a name="WebsiteRedirect" id="@cdktf/provider-ionoscloud.s3ObjectCopy.S3ObjectCopyConfig.property.websiteRedirect"></a>

```csharp
public string WebsiteRedirect { get; set; }
```

- *Type:* string

If the bucket is configured as a website, redirects requests for this object copy to another object copy in the same bucket or to an external URL.

IONOS Object Storage Object Copy Storage stores the value of this header in the object copy metadata

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_object_copy#website_redirect S3ObjectCopy#website_redirect}

---



